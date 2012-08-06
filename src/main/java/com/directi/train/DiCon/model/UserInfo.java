package com.directi.train.DiCon.model;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created with IntelliJ IDEA.
 * User: niteeshk
 * Date: 31/7/12
 * Time: 1:57 PM
 * To change this template use File | Settings | File Templates.
 */
public class UserInfo extends User {
    String phone;


    public static final RowMapper<UserInfo> rowMapper = new RowMapper<UserInfo>() {
        @Override
        public UserInfo mapRow(ResultSet resultSet, int i) throws SQLException {
            return new UserInfo(resultSet);
        }
    };

    public UserInfo(ResultSet resultSet) throws SQLException {
        super(resultSet);
        this.phone = resultSet.getString("phone");
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPhone() {
        return phone;
    }
}
