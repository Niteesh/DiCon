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
        return db.queryForList("SELECT user_id_1 FROM twitter.follows WHERE followuid = ? AND stopdate IS null;", user_id);
    }

    public Integer getFollowerCout(int user_id){
        return db.queryForInt("select count(1) from twitter.follows WHERE followuid = ? and stopdate IS NULL;",user_id)   ;
    }

    public List<Map<String, Object>> getFollowingList(int user_id){
        return db.queryForList("SELECT user_id_2 FROM twitter.follows WHERE uid = ? AND stopdate=null;",user_id);
    }
    public Integer getFollowingCout(int user_id){
        return db.queryForInt("select count(1) from twitter.follows WHERE uid = ? and stopdate IS NULL;",user_id)   ;
    }


    public List<Map<String,Object>> getPostsByUser(int user_id){
        return db.queryForList("SELECT tweet,timestamp FROM twitter.tweets WHERE user_id = ? ORDER BY timestamp DESC;",user_id);
    }

    public List<Map<String,Object>> getNewsFeed(int user_id){
        return db.queryForList("SELECT F.followuid,T.tweet,T.timestamp FROM twitter.tweets T INNER JOIN twitter.follows F ON T.user_id = F.followuid AND (T.timestamp BETWEEN F.startdate AND F.stopdate) WHERE F.uid = ? ORDER BY T.timestamp DESC;",user_id);
    }

    public int newUser(String email, String password, String lastname, String dob, String phone,String dp_url){
        int user_id = db.queryForInt("SELECT MAX(user_id) FROM twitter.login;") + 1;

        return db.update("INSERT into twitter.login VALUES(?,?,MD5(?));",user_id,email,password)
                & db.update("INSERT into twitter.details VALUES(?,?,?,?,?);",user_id,dob,lastname,phone,dp_url);
    }

    public int follow(int user_id_1,int user_id_2){
        return db.update("INSERT INTO twitter.follows(uid,followuid,startdate,stopdate) VALUES(?,?,now(),null);",user_id_1,user_id_2);
    }

    public int unFollow(int user_id_1,int user_id_2){
        return db.update("UPDATE twitter.follows SET stopdate = now() WHERE uid = ? AND followuid = ?;",user_id_1,user_id_2);
    }

    public int newTweet(int user_id,String text){
        return db.update("INSERT INTO twitter.tweets(user_id, text, timestamp) VALUES(?,?,now());",user_id,text);
    }

    public int updateFirstName(int user_id,String firstname){
        return db.update("UPDATE twitter.details SET firstname = ? WHERE user_id = ?;",firstname,user_id);
    }

    public int updateLastName(int user_id,String lastname){
        return db.update("UPDATE twitter.details SET lastname = ? WHERE user_id = ?;",lastname,user_id);
    }

    public int updatePhone(int user_id,String phone){
        return db.update("UPDATE twitter.details SET phone = ? WHERE user_id = ?;",phone,user_id);
    }

    public int updateDPURL(int user_id,String dpurl){
        return db.update("UPDATE twitter.details SET dp_url = ? WHERE user_id = ?;",dpurl,user_id);
    }

    public Map<String, Object> getLoginDetails(String email, String password) {
        return db.queryForMap("SELECT * from twitter.login WHERE email = ?",email);
    }

    public int getTweetCount(Integer userID) {

        return db.queryForInt("select count(1) from twitter.tweets where user_id = ?", userID);
    }

    public String getUsersStatus(Integer profileUserID, Integer userID) {
        int following = db.queryForInt("select count(1) from twitter.follows where uid = ? and followuid = ? ",profileUserID, userID )  ;
        if (following > 0)
            return "following";
        return "follow";
    }
}
