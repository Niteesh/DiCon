package com.directi.train.DiCon.controllers;

import com.directi.train.DiCon.services.DAO;
import com.directi.train.DiCon.services.Tokenizer;
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
    private final Tokenizer tokenizer;

    @Autowired
    public UserController(DAO dao, TwitterUser twitterUser, Tokenizer tokenizer) {
        this.dao = dao;
        this.twitterUser = twitterUser;
        this.tokenizer = tokenizer;
    }


    @RequestMapping("/")
    public ModelAndView index() {
        ModelAndView mv = new ModelAndView("/index");
        mv.addObject("messageVisibility", "hidden");
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
        mv.addObject("auth_token", session.getAttribute("authToken"));

        return mv;

    }

    @RequestMapping(value = "/sign_in", method = RequestMethod.GET)
    public ModelAndView loginForm(HttpSession session) {
        ModelAndView mv = new ModelAndView("/index");
        mv.addObject("messageVisibility", "hidden");
        return mv;
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
            mv.addObject("messageVisibility", "");
            return mv;
        }
        session.setAttribute("email", email);
        session.setAttribute("userID", userID);
        String authToken =   tokenizer.getToken();
        tokenizer.registerToken(userID, authToken);
        session.setAttribute("auth_token", authToken);
        mv.setViewName("redirect:/home");
        return mv;
    }

    @RequestMapping(value = "/logout")
    public String logout(HttpSession session) {

        tokenizer.invalidateToken((String) session.getAttribute("auth_token"));
        session.invalidate();
        return "redirect:/";
    }


}