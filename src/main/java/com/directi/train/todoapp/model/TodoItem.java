package com.directi.train.todoapp.model;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TodoItem {
    private String name;
    private int id;
    public static final RowMapper<TodoItem> rowMapper = new RowMapper<TodoItem>() {
        @Override public TodoItem mapRow(ResultSet resultSet, int i) throws SQLException {
            return new TodoItem(resultSet);
        }
    };

    public TodoItem(ResultSet rs) throws SQLException {
        id = rs.getInt("id");
        name = rs.getString("description");
    }

    public TodoItem() { }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
