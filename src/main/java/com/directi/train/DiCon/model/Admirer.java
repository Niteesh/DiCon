package com.directi.train.DiCon.model;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class Admirer extends User {
    String status;

    public static final RowMapper<Admirer> rowMapper = new RowMapper<Admirer>() {
        @Override
        public Admirer mapRow(ResultSet resultSet, int i) throws SQLException {
            return new Admirer(resultSet);
        }
    };

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Admirer(ResultSet resultSet) throws SQLException {
        super(resultSet);
        status = resultSet.getString("status");

    }

}
