package com.directi.train.DiCon.controllers;

import com.directi.train.DiCon.services.DAO;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("{userID}")
public class Profile {

    private DAO dao;

    @Autowired
    public Profile(DAO dao){
        this.dao=dao;
    }

    @RequestMapping
    public ModelAndView profilePage(@PathVariable("userID") Integer userID,  HttpSession session) {

        ObjectMapper mapper = new ObjectMapper();

        ModelAndView mv = new ModelAndView("profile");
        mv.addObject("user_id", userID);
        Map<String, Object> userDetails = dao.getDetails(userID);
        int followerCount = dao.getFollowerCount(userID);
        int followingCount = dao.getFollowingCount(userID);
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

    @RequestMapping(value="follow", method= RequestMethod.GET)
    @ResponseBody
    public int follow(@PathVariable("userID") Integer userID, HttpSession session){

        return dao.follow((Integer) session.getAttribute("userID"), userID);

    }

    @RequestMapping(value="unfollow", method= RequestMethod.GET)
    @ResponseBody
    public int unFollow(@PathVariable("userID") Integer userID, HttpSession session){

        return dao.unFollow((Integer) session.getAttribute("userID"), userID);

    }

    @RequestMapping(value = "tweets/new", method = RequestMethod.POST)
    @ResponseBody
    public String postTweet(HttpSession session, @RequestParam String tweet_text) {
        return "{ success : " + dao.newTweet((Integer) session.getAttribute("userID"), tweet_text) + ", tweet_text : \"" + tweet_text + "\", user_id:\""+(Integer) session.getAttribute("userID")+"\"}";
    }

    @RequestMapping(value = "tweets/fetch", method = RequestMethod.GET)
    @ResponseBody
    public String fetchNewTweets(HttpSession session,@PathVariable("userID") Integer userID, @RequestParam String latest_tweet_id) {

        List<Map<String, Object>> resultSet = dao.getPostsByUser(userID, Integer.parseInt(latest_tweet_id));
        if(resultSet.size()==0) return "[]";
        String responseString = "";
        for (Map<String, Object> i : resultSet) {
            responseString += ",{";
            responseString += "\"tweet_text\":";
            responseString += "\"" + i.get("text") + "\"";
            responseString += ",";
            responseString += "\"timestamp\":";
            responseString += "\"" + i.get("timestamp") + "\"";
            responseString += ",";
            responseString += "\"tweet_id\":";
            responseString += "\"" + i.get("tweet_id") + "\"";
            responseString += ",";
            responseString += "\"fullname\":";
            responseString += "\"" + dao.getFullName((Integer) i.get("user_id")) + "\"";
            responseString += ",";
            responseString += "\"user_id\":";
            responseString += "\"" + i.get("user_id") + "\"";
            responseString += "}";
        }
        responseString += "]";
        responseString = "[" + responseString.substring(1);
        System.out.println(responseString);
        return responseString;
    }

    @RequestMapping(value = "newsfeed", method = RequestMethod.GET)
    @ResponseBody
    public String newsFeed(HttpSession session,@PathVariable("userID") Integer userID, @RequestParam String latest_feed_id) {

        List<Map<String, Object>> resultSet = dao.getNewsFeed(userID, Integer.parseInt(latest_feed_id));
//        List<Map<String, Object>> resultSet = dao.getPostsByUser(userID, Integer.parseInt(latest_tweet_id));
        if(resultSet.size()==0) return "[]";
        String responseString = "";
        for (Map<String, Object> i : resultSet) {
            responseString += ",{";
            responseString += "\"tweet_text\":";
            responseString += "\"" + i.get("text") + "\"";
            responseString += ",";
            responseString += "\"timestamp\":";
            responseString += "\"" + i.get("timestamp") + "\"";
            responseString += ",";
            responseString += "\"tweet_id\":";
            responseString += "\"" + i.get("tweet_id") + "\"";
            responseString += ",";
            responseString += "\"fullname\":";
            responseString += "\"" + dao.getFullName((Integer) i.get("following_id")) + "\"";
            responseString += ",";
            responseString += "\"user_id\":";
            responseString += "\"" + i.get("following_id") + "\"";
            responseString += "}";
        }
        responseString += "]";
        responseString = "[" + responseString.substring(1);
        System.out.println(responseString);
        return responseString;
    }


    @RequestMapping(value="following", method = RequestMethod.GET)
    @ResponseBody
    public List<Map<String,Object>> getFollowingList(HttpSession session,@PathVariable("userID") Integer userID){
        return dao.getFollowingList(userID, (Integer) session.getAttribute("userID"));
    }

    @RequestMapping(value="follower", method = RequestMethod.GET)
    @ResponseBody
    public List<Map<String,Object>> getFollowerList(HttpSession session,@PathVariable("userID") Integer userID){
        return dao.getFollowersList(userID);
    }

}
