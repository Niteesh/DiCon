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
    private String name;

    private String displayPicture;
    private String description;

    public static final RowMapper<User> rowMapper = new RowMapper<User>() {
        @Override
        public User mapRow(ResultSet resultSet, int i) throws SQLException {
            return new User(resultSet);
        }
    };


    public User(ResultSet resultSet) throws SQLException {
        this.user_id = resultSet.getInt("user_id");
        this.name = resultSet.getString("fullname");

        this.displayPicture = resultSet.getString("dp_url");
        this.description = resultSet.getString("description");

    }


    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public void setName(String name) {
        this.name = name;
    }


    public void setDisplayPicture(String displayPicture) {
        this.displayPicture = displayPicture;
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

    public String getName() {
        return name;
    }


    public String getDisplayPicture() {
        return displayPicture;
    }
}
