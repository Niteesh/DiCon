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
import java.util.Map;

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
    public ModelAndView index() {
        ModelAndView mv = new ModelAndView("/index");
        mv.addObject("messageVissibility", "hidden");
        return mv;
    }


    @RequestMapping("/home")
    public ModelAndView home(HttpSession session) {

        ModelAndView mv = new ModelAndView("home");
        Integer userID = (Integer) session.getAttribute("userID");
        int followerCount = dao.getFollowerCount(userID);
        int followingCount = dao.getFollowingCount(userID);
        int tweetCount = dao.getTweetCount(userID);
        Map<String, Object> details = dao.getDetails(userID);
        mv.addObject("current_user_fullname", details.get("fullname"));
        mv.addObject("current_user_id", userID);
        mv.addObject("home_tweetCount", tweetCount);
        mv.addObject("home_followingCount", followingCount);
        mv.addObject("home_followerCount", followerCount);
        mv.addObject("current_user_dp", details.get("dp"));

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
        Integer userID = 0;
        try {
            userID = twitterUser.authanticateUser(email, password);

            if (userID == 0) {
                mv.addObject("message", "Invalid password.");

                return mv;
            }

        } catch (EmptyResultDataAccessException e) {
            mv.addObject("message", "No account with this email exists.");
            mv.addObject("messageVissibility", "");
            return mv;
        }
        session.setAttribute("email", email);
        session.setAttribute("userID", userID);
        mv.setViewName("redirect:/home");
        return mv;
    }

    @RequestMapping(value = "/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }
}