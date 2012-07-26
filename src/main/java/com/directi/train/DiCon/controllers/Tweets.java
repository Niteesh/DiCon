package com.directi.train.DiCon.controllers;

import com.directi.train.DiCon.services.DAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 * User: niteeshk
 * Date: 26/7/12
 * Time: 12:41 PM
 * To change this template use File | Settings | File Templates.
 */
@Controller
@RequestMapping("{userID}")
public class Tweets {

    private DAO dao;

    @Autowired
    public Tweets(DAO dao){
        this.dao=dao;
    }

     @RequestMapping(value="tweets", method= RequestMethod.GET)
    @ResponseBody
    public List<Map<String,Object>> getTweetList(@PathVariable("userID") Integer userID){

         return dao.getPostsByUser(userID);

     }


}
