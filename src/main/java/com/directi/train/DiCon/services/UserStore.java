package com.directi.train.DiCon.services;

import com.directi.train.DiCon.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.simple.SimpleJdbcTemplate;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: niteeshk
 * Date: 31/7/12
 * Time: 1:31 PM
 * To change this template use File | Settings | File Templates.
 */
public class UserStore {

    public SimpleJdbcTemplate db;

    @Autowired
    public UserStore( SimpleJdbcTemplate db) {

        this.db = db;
    }

    public List<User>  getFollowersList(Integer userID){
        return db.query("SELECT user_id, fullname, dp_url FROM twitter.follows follows " +
                "INNER JOIN twitter.details  details ON details.user_id = follows.follower_id" +
                " WHERE following_id = ? AND stop_time IS NULL;",User.rowMapper,userID);

    }
}
