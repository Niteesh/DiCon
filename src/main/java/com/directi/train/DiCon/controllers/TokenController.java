package com.directi.train.DiCon.controllers;

import com.directi.train.DiCon.services.DAO;
import com.directi.train.DiCon.services.Tokenizer;
import com.directi.train.DiCon.services.TwitterUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 * User: niteeshk
 * Date: 10/8/12
 * Time: 4:34 PM
 * To change this template use File | Settings | File Templates.
 */

@Controller
public class TokenController {

    private final DAO dao;
    private final TwitterUser twitterUser;
    private final Tokenizer tokenizer;

    @Autowired
    public TokenController(TwitterUser twitterUser, DAO dao, Tokenizer tokenizer) {
        this.twitterUser = twitterUser;
        this.dao = dao;
        this.tokenizer = tokenizer;
    }

    @RequestMapping(value = "get_token")
    @ResponseBody
    public Map<String, Object> getToken(@RequestParam("email") String email,
                                        @RequestParam("password") String password) {

        Map<String, Object> jsonResponseMap = new HashMap<String, Object>();
            Integer userID = 0;
            try {
                userID = twitterUser.authanticateUser(email, password);

                if (userID == 0) {
                    jsonResponseMap.put("success", 0);
                    jsonResponseMap.put("error","wrong password") ;
                    return jsonResponseMap;
                }

            } catch (EmptyResultDataAccessException e) {
                jsonResponseMap.put("success", 0);
                jsonResponseMap.put("Error","No account with this email exists.") ;

                return jsonResponseMap;
            }
        String token =  tokenizer.getToken();
        jsonResponseMap.put("success", 1);
        jsonResponseMap.put("auth_token",token) ;
        tokenizer.registerToken(userID, token);
        return jsonResponseMap;
    }

}
