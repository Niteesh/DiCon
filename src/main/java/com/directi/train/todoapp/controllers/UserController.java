package com.directi.train.todoapp.controllers;

import com.directi.train.todoapp.services.TwitterUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.simple.SimpleJdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;

@Controller
public class UserController {
    public final SimpleJdbcTemplate db;

    @Autowired
    private TwitterUser twitterUser;

    @Autowired
    public UserController(SimpleJdbcTemplate db) {this.db = db;}

    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping(value = "/sign_in", method = RequestMethod.GET)
    public String loginForm() {
        return "index";
    }

    @RequestMapping(value = "/sign_in", method = RequestMethod.POST)
    public ModelAndView login(@RequestParam("username") String userName,
                              @RequestParam("password") String password,
                              HttpSession session) {
        ModelAndView mv = new ModelAndView("/index");
        Integer userID =0;
        try {




               userID =   twitterUser.authanticateUser(userName, password);

                if (userID==0) {
                    mv.addObject("message", "Invalid "+userID+" password ."+TwitterUser.getMD5(password));
                    return mv;
                }

        } catch (EmptyResultDataAccessException e) {
            mv.addObject("message", "email not registered yet....");
            return mv;
        }
        session.setAttribute("userID", userID);
        mv.setViewName("redirect:/todo");
        return mv;
    }

    @RequestMapping(value = "/user/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }
}