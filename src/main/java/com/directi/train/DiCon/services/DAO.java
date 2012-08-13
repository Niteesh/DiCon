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

    public int findUsername(String email) {
        return db.queryForInt("SELECT count(*) FROM twitter.login WHERE email = ?;", email);
    }

    public int matchPassword(String email, String password) {
        try {
            return db.queryForInt("SELECT user_id FROM twitter.login WHERE email = ? AND password = MD5(?);", email, password);
        } catch (DataAccessException e) {
            return -1;
        }
    }

    public Map<String, Object> getDetails(int user_id) {
        return db.queryForMap("SELECT * FROM twitter.details WHERE user_id = ?;", user_id);
    }


    public List<Map<String, Object>> getFollowersList(int user_id, int login_id) {
        return db.queryForList(" select details.user_id, fullname, dp, description,CASE WHEN details.user_id= ? THEN 'hidden' WHEN follow.status = 0 Then 'not-following'  else 'following' end as status From twitter.details details" +
                " INNER JOIN (select f1.follower_id as user_id, max(CASE WHEN  f2.follower_id= ?   THEN 1 ELSE 0 END ) as status " +
                "from twitter.follows f1 inner join twitter.follows f2 on f1.follower_id = f2.following_id WHERE f1.following_id= ? AND f1.stop_time IS NULL AND f2.stop_time IS NULL GROUP BY f1.follower_id) as follow  " +
                "ON details.user_id = follow.user_id;", login_id, login_id, user_id);
    }

    public Integer getFollowerCount(int user_id) {
        return db.queryForInt("select count(1) from twitter.follows WHERE following_id = ? AND stop_time IS NULL;", user_id);
    }


    public List<Map<String, Object>> getFollowingList(int user_id, int login_id) {
        return db.queryForList(" select details.user_id, fullname, dp, description,CASE WHEN details.user_id= ? THEN 'hidden' WHEN follow.status = 0 Then 'not-following' else 'following' end as status From twitter.details details" +
                " INNER JOIN (select f1.following_id as user_id, max(CASE WHEN  f2.follower_id= ?   THEN 1 ELSE 0 END ) as status " +
                "from twitter.follows f1 inner join twitter.follows f2 on f1.following_id = f2.following_id WHERE f1.follower_id= ? AND f1.stop_time IS NULL AND f2.stop_time IS NULL GROUP BY f1.following_id) as follow  " +
                "ON details.user_id = follow.user_id;",login_id, login_id, user_id);
    }

    public Integer getFollowingCount(int user_id) {
        return db.queryForInt("select count(1) from twitter.follows WHERE follower_id = ? and stop_time IS NULL;", user_id);
    }


    public List<Map<String, Object>> getPostsByUser(int user_id, int latest_tweet_id, int oldest_tweet_id, int newOrOldFlag) {
        if (newOrOldFlag == 2)
            return db.queryForList("SELECT D.fullname,D.dp,T.text,(now()-T.timestamp) as timestamp,T.tweet_id,T.user_id FROM twitter.tweets T INNER JOIN twitter.details D ON T.user_id = D.user_id WHERE T.user_id = ? AND T.tweet_id > ? ORDER BY T.timestamp DESC LIMIT 10;", user_id, latest_tweet_id);
        else
            return db.queryForList("SELECT D.fullname,D.dp,T.text,(now()-T.timestamp) as timestamp,T.tweet_id,T.user_id FROM twitter.tweets T INNER JOIN twitter.details D ON T.user_id = D.user_id WHERE T.user_id = ? AND T.tweet_id < ? ORDER BY T.timestamp DESC LIMIT 10;", user_id, oldest_tweet_id);
    }

    public List<Map<String, Object>> getNewsFeed(int user_id, int latest_feed_id, int oldest_feed_id, int newOrOldFlag) {
        if (newOrOldFlag == 2)
            return db.queryForList("SELECT DISTINCT D.fullname,D.dp,T.text,(now()-T.timestamp) as timestamp,T.tweet_id,T.user_id FROM twitter.tweets T INNER JOIN twitter.follows  F ON T.user_id = F.following_id OR T.user_id=? INNER JOIN twitter.details D on T.user_id = D.user_id  WHERE F.follower_id = ?  AND (T.user_id=? OR T.timestamp BETWEEN F.start_time AND F.stop_time OR (F.stop_time IS NULL AND T.timestamp >= F.start_time)) AND tweet_id > ?  ORDER BY timestamp ASC LIMIT 10;", user_id, user_id, user_id, latest_feed_id);
        else
            return db.queryForList("SELECT DISTINCT D.fullname,D.dp,T.text,(now()-T.timestamp) as timestamp,T.tweet_id,T.user_id FROM twitter.tweets T INNER JOIN twitter.follows  F ON T.user_id = F.following_id OR T.user_id=? INNER JOIN twitter.details D on T.user_id = D.user_id  WHERE F.follower_id = ?  AND (T.user_id=? OR T.timestamp BETWEEN F.start_time AND F.stop_time OR (F.stop_time IS NULL AND T.timestamp >= F.start_time)) AND tweet_id < ?  ORDER BY timestamp ASC LIMIT 10;", user_id, user_id, user_id, oldest_feed_id);
    }

    public int newUser(String email, String password, String fullname) {
        int user_id = db.queryForInt("SELECT MAX(user_id) FROM twitter.login;") + 1;

        return db.update("INSERT into twitter.login VALUES(?,?,MD5(?));", user_id, email, password)
                & db.update("INSERT into twitter.details VALUES(?,?);", user_id, fullname);
    }

    public int follow(int follower_id, int following_id) {
        return db.update("INSERT INTO twitter.follows(follower_id,following_id) VALUES(?,?);", follower_id, following_id);
    }

    public int unFollow(int follower_id, int following_id) {
        return db.update("UPDATE twitter.follows SET stop_time = now() WHERE follower_id = ? AND following_id = ? AND stop_time IS NULL;", follower_id, following_id);
    }

    public int newTweet(int user_id, String text) {
        return db.update("INSERT INTO twitter.tweets(user_id, text) VALUES(?,?);", user_id, text);
    }

    public int updateFullname(int user_id, String fullname) {
        return db.update("UPDATE twitter.details SET fullname = ? WHERE user_id = ?;", fullname, user_id);
    }

    public int updatePhone(int user_id, String phone) {
        return db.update("UPDATE twitter.details SET phone = ? WHERE user_id = ?;", phone, user_id);
    }

    public int updateDP(int user_id, String dp) {
        return db.update("UPDATE twitter.details SET dp = ? WHERE user_id = ?;", dp, user_id);
    }

    public int updateDetails(int user_id, String fullname, String description, String location, String dp) {
        if (!dp.equals(""))
            return db.update("UPDATE twitter.details SET fullname = ?, description = ?, phone = ?,dp = ? WHERE user_id = ?;", fullname, description, location, dp, user_id);
        else
            return db.update("UPDATE twitter.details SET fullname = ?, description = ?, phone = ? WHERE user_id = ?;", fullname, description, location, user_id);

    }

    public Map<String, Object> getLoginDetails(String email, String password) {
        return db.queryForMap("SELECT * from twitter.login WHERE email = ?", email);
    }

    public int getTweetCount(Integer userID) {

        return db.queryForInt("select count(1) from twitter.tweets where user_id = ?", userID);
    }

    public String getUsersStatus(Integer profileUserID, Integer userID) {
        if (userID.equals(profileUserID)) return "edit";
        int following = db.queryForInt("select count(1) from twitter.follows where follower_id = ? AND following_id = ? AND stop_time IS NULL;", userID, profileUserID);
        if (following > 0)
            return "following";
        return "not-following";
    }

    public String getFullName(Integer user_id) {
        return db.queryForObject("SELECT fullname FROM twitter.details WHERE user_id = ?;", String.class, user_id);
    }

    public List<Map<String, Object>> searchByFullname(String search_string) {
        return db.queryForList("SELECT user_id,fullname,dp FROM twitter.details WHERE position(initcap(?) in initcap(fullname))>0;", search_string);
    }

    public String getDP(Integer following_id) {
        return db.queryForObject("SELECT dp FROM twitter.details WHERE user_id = ?;", String.class, following_id);
    }


    public List<Map<String, Object>> getSimilarPpl(Integer userID) {
        return db.queryForList("SELECT fullname, dp, details.user_id FROM twitter.details details INNER JOIN " +
                "(SELECT f2.follower_id as user_id, count(f2.follower_id) as score " +
                "FROM  twitter.follows f1 INNER JOIN " +
                "  twitter.follows f2 ON f1.following_id = f2.following_id " +
                "WHERE " +
                "  f1.follower_id = ? and f2.follower_id <> ? and f1.stop_time is null and f2.stop_time is null " +
                "group by f2.follower_id " +
                "order by score DESC LIMIT 10) as similarppl ON " +
                "similarppl.user_id = details.user_id;", userID, userID);
    }


    public int upDateRetweet(Integer user_id, Integer tweet_id) {
        return db.update(" Insert into twitter.tweets (user_id, text) " +
                "select ?,'via<a href=\"/'||d.user_id ||'\"> '|| d.fullname ||' : </a> '|| retweet.text as text from twitter.details d INNER JOIN " +
                " (select  user_id,text, tweet_id from twitter.tweets t where tweet_id = ?) as retweet " +
                "ON retweet.user_id = d.user_id;", user_id, tweet_id);
    }

    public Integer getUidForToken(String token){
        return db.queryForInt("select user_id from twitter.token where token = ?", token) ;
    }

    public int newToken(Integer userID, String token) {
        return db.update("INSERT INTO twitter.token (user_id, token) values(?,?)",userID, token);
    }

    public int deleteToken(String token) {
        return db.update("DELETE FROM twitter.token where token = ? ", token);
    }

    public List<Map<String, Object>> getFollowSuggestions(Integer userID) {
        return db.queryForList("select dp,fullname,user_id from twitter.details where user_id in (select f2.following_id as suggested_id from twitter.follows f2 where f2.follower_id in (select f1.following_id from twitter.follows f1 where f1.follower_id=? and f1.stop_time is null)  and f2.following_id not in (select f3.following_id from twitter.follows f3 where f3.follower_id=?) and f2.following_id<>? and f2.stop_time is null group by f2.following_id order by count(1) desc limit 10);", userID, userID, userID);
    }


    public List<Map<String, Object>> getTrendingNow() {
        return db.queryForList("select fullname,user_id from twitter.details where user_id in (select following_id as trend_id from twitter.follows where start_time > now()-time '01:00' and stop_time is null group by following_id order by count(1) desc limit 10);");
    }
}
