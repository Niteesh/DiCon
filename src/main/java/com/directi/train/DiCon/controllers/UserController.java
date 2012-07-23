package com.directi.train.DiCon.controllers;

import com.directi.train.DiCon.services.DAO;
import com.directi.train.DiCon.services.TwitterUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;

@Controller
public class UserController {
    private final DAO dao;
    private final TwitterUser twitterUser;

    @Autowired
    public UserController(DAO dao, TwitterUser twitterUser) {
        this.dao = dao;
        this.twitterUser = twitterUser;
    }


    @RequestMapping("/")
    public String index() {
        return "index";
    }



    @RequestMapping("/home")
    public ModelAndView home(HttpSession session) {

        ModelAndView mv = new ModelAndView("home");
        mv.addObject("current_user_fullname",session.getAttribute("userID"));
        return mv;

    }

    @RequestMapping(value = "/sign_in", method = RequestMethod.GET)
    public String loginForm() {
        return "index";
    }

    @RequestMapping(value = "/sign_in", method = RequestMethod.POST)
    public ModelAndView login(@RequestParam("email") String email,
                              @RequestParam("password") String password,
                              HttpSession session) {
        ModelAndView mv = new ModelAndView("/index");
        Integer userID =0;
        try {
               userID =   twitterUser.authanticateUser(email, password);

                if (userID==0) {
                    mv.addObject("message", "Invalid "+userID+" password ."+TwitterUser.getMD5(password));
                    return mv;
                }

            } catch (EmptyResultDataAccessException e) {
                mv.addObject("message", "email not registered yet....");
                return mv;
        }
        session.setAttribute("email", email);
        session.setAttribute("userID", userID);
        mv.setViewName("redirect:/home");
        return mv;
    }

    @RequestMapping(value = "/user/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }
}