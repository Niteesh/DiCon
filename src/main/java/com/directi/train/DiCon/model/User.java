package com.directi.train.DiCon.model;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created with IntelliJ IDEA.
 * User: niteeshk
 * Date: 30/7/12
 * Time: 5:09 PM
 * To change this template use File | Settings | File Templates.
 */
public class User {
    private Integer user_id;
    private String fullname;

    private byte[] dp;
    private String description;

    public static final RowMapper<User> rowMapper = new RowMapper<User>() {
        @Override
        public User mapRow(ResultSet resultSet, int i) throws SQLException {
            return new User(resultSet);
        }
    };


    public User(ResultSet resultSet) throws SQLException {
        this.user_id = resultSet.getInt("user_id");
        this.fullname = resultSet.getString("fullname");

        this.dp = resultSet.getBytes("dp");
        this.description = resultSet.getString("description");

    }


    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public void setFullName(String name) {
        this.fullname = name;
    }


    public void setDp(byte[] displayPicture) {
        this.dp = displayPicture;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public String getDescription() {
        return description;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public String getFullname() {
        return fullname;
    }


    public byte[] getDp() {
        return dp;
    }
}
