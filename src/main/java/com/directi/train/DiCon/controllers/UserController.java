package com.directi.train.DiCon.controllers;

import com.directi.train.DiCon.services.DAO;
import com.directi.train.DiCon.services.TwitterUser;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
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
    public String index() {
        return "index";
    }


    @RequestMapping("/home")
    public ModelAndView home(HttpSession session) {

        ModelAndView mv = new ModelAndView("home");
        Integer userID = (Integer) session.getAttribute("userID");
        int followerCount = dao.getFollowerCout(userID);
        int followingCount = dao.getFollowingCout(userID);
        int tweetCount = dao.getTweetCount(userID);
        mv.addObject("current_user_fullname", session.getAttribute("userID"));
        mv.addObject("current_user_id", session.getAttribute("userID"));
        mv.addObject("home_tweetCount", tweetCount);
        mv.addObject("home_followingCount", followingCount);
        mv.addObject("home_followerCount", followerCount);

        return mv;

    }

    @RequestMapping(value = "/sign_in", method = RequestMethod.GET)
    public String loginForm() {
        return "index";
    }

    @RequestMapping(value = "/{userID}", method = RequestMethod.GET)
    public ModelAndView profilePage(@PathVariable("userID") Integer userID,  HttpSession session) {

        ObjectMapper mapper = new ObjectMapper();

        ModelAndView mv = new ModelAndView("profile");
        mv.addObject("user_id", userID);
        Map<String, Object> userDetails = dao.getDetails(userID);
        int followerCount = dao.getFollowerCout(userID);
        int followingCount = dao.getFollowingCout(userID);
        int tweetCount = dao.getTweetCount(userID);
        String status = dao.getUsersStatus(userID, (Integer) session.getAttribute("userID"));



        mv.addObject("profile_name", userDetails.get("fullname"));
        mv.addObject("profile_phone", userDetails.get("phone"));
        mv.addObject("profile_following", followingCount);
        mv.addObject("profile_follower", followerCount);
        mv.addObject("profile_tweetCount", tweetCount);
        mv.addObject("profile_status",status);


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
                mv.addObject("message", "Invalid " + userID + " password ." + TwitterUser.getMD5(password));
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

    @RequestMapping(value = "/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }
}