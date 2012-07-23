package com.directi.train.todoapp.controllers;

import com.directi.train.todoapp.model.TodoItem;
import com.directi.train.todoapp.services.TodoStore;
import com.google.common.collect.ImmutableMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("todo")
public class TodoController {
    private final TodoStore todoStore;

    @Autowired
    public TodoController(TodoStore todoStore) {
        this.todoStore = todoStore;
    }

    @RequestMapping
    public ModelAndView todo() {
        return new ModelAndView() {{
            addObject(todoStore.list());
        }};
    }

    @RequestMapping("list")
    @ResponseBody
    public List<TodoItem> list() {
        return todoStore.list();
    }

    @RequestMapping("create")
    @ResponseBody
    public TodoItem create(TodoItem todoItem) {
        return todoStore.add(todoItem);
    }

    @RequestMapping("delete")
    @ResponseBody
    public Map<String, String> delete(@RequestParam("id") int id) {
        todoStore.delete(id);
        return ImmutableMap.of("status", "success");
    }

    @RequestMapping("update")
    @ResponseBody
    public ImmutableMap<String, String> update(TodoItem updated) {
        todoStore.update(updated);
        return ImmutableMap.of("status", "success");
    }
}
