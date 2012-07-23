package com.directi.train.todoapp.services;

import com.directi.train.todoapp.model.TodoItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.simple.SimpleJdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoStore {
    private final ThreadLocal<Long> userID;
    public SimpleJdbcTemplate db;

    @Autowired
    public TodoStore(@Qualifier("userID") ThreadLocal<Long> userID, SimpleJdbcTemplate template) {
        this.userID = userID;
        db = template;
    }

    public List<TodoItem> list() {
        return db.query("select id, description from todos where user_id=? order by id asc",
                        TodoItem.rowMapper,
                        userID.get());
    }

    public TodoItem add(TodoItem todoItem) {
        db.update("insert into todos (user_id, description) values(?,?)", userID.get(), todoItem.getName());
        int id = db.queryForInt("CALL IDENTITY()");
        return db.queryForObject("select id, description from todos where id=?",
                                 TodoItem.rowMapper,
                                 id);
    }

    public void delete(int id) {
        db.update("delete from todos where id=? and user_id=?", id, userID.get());
    }

    public void update(TodoItem updated) {
        db.update("update todos set description=? where id=? and user_id=?",
                  updated.getName(),
                  updated.getId(),
                  userID.get());
    }
}
