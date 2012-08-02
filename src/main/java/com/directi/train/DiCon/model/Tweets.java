package com.directi.train.DiCon.model;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Time;

/**
 * Created with IntelliJ IDEA.
 * User: niteeshk
 * Date: 31/7/12
 * Time: 12:28 PM
 * To change this template use File | Settings | File Templates.
 */
public class Tweets {
    private String userName;
    private Integer user_id;
    private String tweet ;
    private Time timeStamp;


    public static final RowMapper<Tweets> rowMapper = new RowMapper<Tweets>() {
        @Override public Tweets mapRow(ResultSet resultSet, int i) throws SQLException {
            return new Tweets(resultSet);
        }
    };


    public Tweets(ResultSet resultSet) throws SQLException {
        this.userName = resultSet.getString("fullname");
        this.user_id = resultSet.getInt("user_id");
        this.tweet = resultSet.getString("tweet");
        this.timeStamp = resultSet.getTime("timestamp");

    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public String getTweet() {
        return tweet;
    }

    public void setTweet(String tweet) {
        this.tweet = tweet;
    }

    public Time getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Time timeStamp) {
        this.timeStamp = timeStamp;
    }
}
