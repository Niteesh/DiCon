package com.directi.train.DiCon.controllers;

import com.directi.train.DiCon.services.DAO;
import com.directi.train.DiCon.services.ImageHandler;
import com.directi.train.DiCon.services.XSSHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.ModelAndView;
import sun.misc.BASE64Encoder;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Random;

@Controller
@RequestMapping("{userID}")
public class Profile {

    private DAO dao;

    @Autowired
    public Profile(DAO dao) {
        this.dao = dao;
    }

    @RequestMapping
    public ModelAndView profilePage(@PathVariable("userID") Integer userID, HttpSession session) {


        ModelAndView mv = new ModelAndView("profile");
        Map<String, Object> userDetails = dao.getDetails(userID);
        int followerCount = dao.getFollowerCount(userID);
        int followingCount = dao.getFollowingCount(userID);
        int tweetCount = dao.getTweetCount(userID);
        String status = dao.getUsersStatus(userID, (Integer) session.getAttribute("userID"));


        mv.addObject("user_id", userID);
        mv.addObject("profile_name", userDetails.get("fullname"));
        mv.addObject("profile_location", userDetails.get("location"));
        mv.addObject("profile_following", followingCount);
        mv.addObject("profile_follower", followerCount);
        mv.addObject("profile_tweetCount", tweetCount);
        mv.addObject("profile_status", status);
        mv.addObject("profile_dp", userDetails.get("dp"));
        mv.addObject("profile_description", userDetails.get("description"));


        return mv;

    }

    @RequestMapping(value = "follow", method = RequestMethod.GET)
    @ResponseBody
    public int follow(@PathVariable("userID") Integer userID, HttpSession session) {

        return dao.follow((Integer) session.getAttribute("userID"), userID);

    }

    @RequestMapping(value = "unfollow", method = RequestMethod.GET)
    @ResponseBody
    public int unFollow(@PathVariable("userID") Integer userID, HttpSession session) {

        return dao.unFollow((Integer) session.getAttribute("userID"), userID);

    }

    @RequestMapping(value = "tweets/new", method = RequestMethod.POST)
    @ResponseBody
    public String postTweet(HttpSession session, @RequestParam String tweet_text) {
        XSSHandler xssHandler = new XSSHandler();
        String tweetText = xssHandler.makeXSSSafe(tweet_text);

        return "{ success : " + dao.newTweet((Integer) session.getAttribute("userID"), tweetText) + ", tweet_text : \"" + tweet_text + "\", user_id:\"" + (Integer) session.getAttribute("userID") + "\"}";
    }

    @RequestMapping(value = "tweets/fetch", method = RequestMethod.GET)
    @ResponseBody
    public List<Map<String, Object>> fetchNewTweets(HttpSession session, @PathVariable("userID") Integer userID, @RequestParam Integer latest_tweet_id, @RequestParam Integer oldest_tweet_id, @RequestParam Integer newOrOldFlag) {
        return dao.getPostsByUser(userID, latest_tweet_id, oldest_tweet_id, newOrOldFlag);
    }

    @RequestMapping(value = "newsfeed", method = RequestMethod.GET)
    @ResponseBody
    public List<Map<String, Object>> newsFeed(HttpSession session, @PathVariable("userID") Integer userID, @RequestParam Integer latest_feed_id, @RequestParam Integer oldest_feed_id, @RequestParam Integer newOrOldFlag) {
        return dao.getNewsFeed(userID, latest_feed_id, oldest_feed_id, newOrOldFlag);
    }



    @RequestMapping(value = "edit", method = RequestMethod.POST)
    public ModelAndView submitEdit(HttpSession session, @RequestParam CommonsMultipartFile dp, @RequestParam String fullname, @RequestParam String description, @RequestParam String location, @PathVariable("userID") Integer userID) throws IOException {


        if(!userID.equals(session.getAttribute("userID"))){
            return  new ModelAndView("redirect:/");
        }

        String fileNameToLowerCase = dp.getOriginalFilename().toLowerCase();
        String fileExtension = fileNameToLowerCase.substring(fileNameToLowerCase.indexOf(".") + 1, fileNameToLowerCase.length());
        System.out.println("file extension =" + fileExtension);
        ImageHandler imageHandler = new ImageHandler();
        dao.updateDetails(userID,fullname,description,location, new BASE64Encoder().encode(imageHandler.resizeImage(dp.getBytes(), fileExtension, 128)));
        return new ModelAndView("redirect:/"+userID);
    }


    @RequestMapping(value = "following", method = RequestMethod.GET)
    @ResponseBody
    public List<Map<String, Object>> getFollowingList(HttpSession session, @PathVariable("userID") Integer userID) {
        return dao.getFollowingList(userID, (Integer) session.getAttribute("userID"));
    }

    @RequestMapping(value = "follower", method = RequestMethod.GET)
    @ResponseBody
    public List<Map<String, Object>> getFollowerList(HttpSession session, @PathVariable("userID") Integer userID) {
        return dao.getFollowersList(userID, (Integer) session.getAttribute("userID"));
    }


    @RequestMapping(value = "similar_ppl", method = RequestMethod.GET)
    @ResponseBody
    public List<Map<String,Object>> similarPpl(@PathVariable("userID") Integer userID){
        List<Map<String, Object>> similarPpl = dao.getSimilarPpl(userID);
        Collections.shuffle(similarPpl, new Random(System.nanoTime()));
        if(similarPpl.size() < 3)
            return similarPpl;
        else
            return similarPpl.subList(0,3);
    }

    @RequestMapping(value = "follow_suggestions", method = RequestMethod.GET)
    @ResponseBody
    public List<Map<String,Object>> followSuggestions(@PathVariable("userID") Integer userID){
        List<Map<String, Object>> followSuggestions = dao.getFollowSuggestions(userID);
        Collections.shuffle(followSuggestions, new Random(System.nanoTime()));
        if(followSuggestions.size() <= 3)
            return followSuggestions;
        else
            return followSuggestions.subList(0,3);
    }

    @RequestMapping(value = "retweet", method = RequestMethod.POST)
    @ResponseBody
    public String reTweet(HttpSession session, @RequestParam("tweet_id") Integer tweet_id){
        return "{ success : " +  dao.upDateRetweet((Integer) session.getAttribute("userID"),tweet_id)+"}";
    }
}

