package com.directi.train.DiCon.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.simple.SimpleJdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class DAO {

    @Autowired
    private SimpleJdbcTemplate db;

    public int findUsername(String email){
        return db.queryForInt("SELECT count(*) FROM twitter.login WHERE email = ?;",email);
    }

    public int matchPassword(String email,String password){
        try{
            return db.queryForInt("SELECT user_id FROM twitter.login WHERE email = ? AND password = MD5(?);",email,password);
        } catch (DataAccessException e){
            return -1;
        }
    }

    public Map<String,Object> getDetails(int user_id){
        return db.queryForMap("SELECT * FROM twitter.details WHERE user_id = ?;", user_id);
    }

    public List<Map<String,Object>> getFollowersList(int user_id){
        return db.queryForList("SELECT follower_id FROM twitter.follows WHERE following_id = ? AND stop_time IS null;", user_id);
    }

    public Integer getFollowerCount(int user_id){
        return db.queryForInt("select count(1) from twitter.follows WHERE following_id = ? AND stop_time IS NULL;",user_id)   ;
    }

    public List<Map<String, Object>> getFollowingList(int user_id){
        return db.queryForList("SELECT following_id FROM twitter.follows WHERE follower_id = ? AND stop_time IS NULL;",user_id);
    }
    public Integer getFollowingCount(int user_id){
        return db.queryForInt("select count(1) from twitter.follows WHERE follower_id = ? and stop_time IS NULL;",user_id)   ;
    }


    public List<Map<String,Object>> getPostsByUser(int user_id, int latest_tweet_id){
        return db.queryForList("SELECT text,timestamp,tweet_id,user_id FROM twitter.tweets WHERE user_id = ? AND tweet_id > ? ORDER BY timestamp ASC;",user_id,latest_tweet_id);
    }

    public List<Map<String,Object>> getNewsFeed(int user_id){
        return db.queryForList("SELECT T.text,T.timestamp,T.tweet_id,F.following_id FROM twitter.tweets T INNER JOIN twitter.follows F ON T.user_id = F.following_id AND (T.timestamp BETWEEN F.start_time AND F.stop_time OR F.stop_time IS NULL) WHERE F.follower_id = ? ORDER BY T.timestamp ASC;",user_id);
    }

    public int newUser(String email, String password, String fullname, String description, String phone,String dp_url){
        int user_id = db.queryForInt("SELECT MAX(user_id) FROM twitter.login;") + 1;

        return db.update("INSERT into twitter.login VALUES(?,?,MD5(?));",user_id,email,password)
                & db.update("INSERT into twitter.details VALUES(?,?,?,?,?);",user_id,description,fullname,phone,dp_url);
    }

    public int follow(int follower_id,int following_id){
        return db.update("INSERT INTO twitter.follows(follower_id,following_id,start_time,stop_time) VALUES(?,?,now(),null);",follower_id,following_id);
    }

    public int unFollow(int follower_id,int following_id){
        return db.update("UPDATE twitter.follows SET stop_time = now() WHERE follower_id = ? AND following_id = ?;",follower_id,following_id);
    }

    public int newTweet(int user_id,String text){
        return db.update("INSERT INTO twitter.tweets(user_id, text, timestamp) VALUES(?,?,now());",user_id,text);
    }

    public int updateFirstName(int user_id,String fullname){
        return db.update("UPDATE twitter.details SET fullname = ? WHERE user_id = ?;",fullname,user_id);
    }

    public int updateLastName(int user_id,String description){
        return db.update("UPDATE twitter.details SET description = ? WHERE user_id = ?;",description,user_id);
    }

    public int updatePhone(int user_id,String phone){
        return db.update("UPDATE twitter.details SET phone = ? WHERE user_id = ?;",phone,user_id);
    }

    public int updateDPURL(int user_id,String dp_url){
        return db.update("UPDATE twitter.details SET dp_url = ? WHERE user_id = ?;",dp_url,user_id);
    }

    public Map<String, Object> getLoginDetails(String email, String password) {
        return db.queryForMap("SELECT * from twitter.login WHERE email = ?",email);
    }

    public int getTweetCount(Integer userID) {

        return db.queryForInt("select count(1) from twitter.tweets where user_id = ?", userID);
    }

    public String getUsersStatus(Integer profileUserID, Integer userID) {
        int following = db.queryForInt("select count(1) from twitter.follows where follower_id = ? and following_id = ? ", userID, profileUserID )  ;
        if (following > 0)
            return "following";
        return "not-following";
    }

    public String getFullName(Integer user_id) {
        return db.queryForObject("SELECT fullname FROM twitter.details WHERE user_id = ?;",String.class,user_id);
    }
}
