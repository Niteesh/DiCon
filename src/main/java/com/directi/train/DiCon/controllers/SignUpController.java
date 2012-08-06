package com.directi.train.DiCon.controllers;

import com.directi.train.DiCon.services.TwitterUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;

/**
 * Created with IntelliJ IDEA.
 * User: niteeshk
 * Date: 19/7/12
 * Time: 6:18 PM
 * To change this template use File | Settings | File Templates.
 */
@Controller
public class SignUpController {

    private TwitterUser twitterUser;

    @Autowired
    public SignUpController(TwitterUser twitterUser) {

        this.twitterUser =  twitterUser;

     }

    @RequestMapping(value = "/sign_up", method = RequestMethod.POST)
    public ModelAndView signUp(@RequestParam("fullname") String fullName,
                              @RequestParam("email") String email,
                              @RequestParam("password") String password,
                              HttpSession session) {

        ModelAndView mv = new ModelAndView("/index");

        if(!TwitterUser.isValidEmail(email)) {
            mv.addObject("message", "invalid email...");

        }
         else{
            try{
                if(!twitterUser.isUserExist(email)){
                    Integer userID =  twitterUser.addUser(fullName, email, password);
                    if(userID != -1){
                        session.setAttribute("email", email);
                        session.setAttribute("userID", userID);
                        mv.setViewName("redirect:/home");
                        return mv;
                    } else {
                        mv.addObject("message", "Oops faced some error.. Please try again later");
                    }
                }
                else
                {
                    mv.addObject("message","user with this email already exist already exist");
                }
            }catch(DataAccessException e){
                mv.addObject("message", "Oops faced some error.. Please try again later");
            }
        }
        mv.setViewName("/index");
        return mv;
    }



    }
