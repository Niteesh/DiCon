package com.directi.train.DiCon.controllers;

import com.directi.train.DiCon.services.DAO;
import com.directi.train.DiCon.services.ImageHandler;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.ModelAndView;
import sun.misc.BASE64Encoder;

import javax.servlet.http.HttpSession;
import java.io.IOException;
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
        mv.addObject("profile_dp",userDetails.get("dp"));
        mv.addObject("profile_description",userDetails.get("description"));


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
    public List<Map<String, Object>> fetchNewTweets(HttpSession session, @PathVariable("userID") Integer userID, @RequestParam String latest_tweet_id) {

        return dao.getPostsByUser(userID, Integer.parseInt(latest_tweet_id));

    }

    @RequestMapping(value = "newsfeed", method = RequestMethod.GET)
    @ResponseBody
    public List<Map<String, Object>> newsFeed(HttpSession session, @PathVariable("userID") Integer userID, @RequestParam String latest_feed_id) {

        return dao.getNewsFeed(userID, Integer.parseInt(latest_feed_id));

    }


    @RequestMapping(value="edit", method=RequestMethod.GET)
    public ModelAndView editPopup(@PathVariable("userID") Integer userID){
        ModelAndView mv = new ModelAndView("editpopup");
        mv.addObject("current_user_id",userID);
        return mv;
    }

    @RequestMapping(value="editsubmit", method=RequestMethod.POST)
    public String submitEdit(HttpSession session,@RequestParam CommonsMultipartFile file,@PathVariable("userID") Integer userID) throws IOException {
        String fileNameToLowerCase = file.getOriginalFilename().toLowerCase();
        String fileExtension = fileNameToLowerCase.substring(fileNameToLowerCase.indexOf(".")+1,fileNameToLowerCase.length());
        System.out.println("file extension =" + fileExtension);

        ImageHandler imageHandler = new ImageHandler();








        dao.updateDP(userID,new BASE64Encoder().encode(imageHandler.resizeImage(file.getBytes(),fileExtension,128)));
        return ("editpopup");
    }


    @RequestMapping(value="following", method = RequestMethod.GET)
    @ResponseBody
    public List<Map<String,Object>> getFollowingList(HttpSession session,@PathVariable("userID") Integer userID){
        return dao.getFollowingList(userID, (Integer) session.getAttribute("userID"));
    }

    @RequestMapping(value="follower", method = RequestMethod.GET)
    @ResponseBody
    public List<Map<String,Object>> getFollowerList(HttpSession session,@PathVariable("userID") Integer userID){
        return dao.getFollowersList(userID, (Integer) session.getAttribute("userID"));
    }


}

