package com.directi.train.DiCon.controllers;


import com.directi.train.DiCon.services.Tokenizer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class APIAuthInterceptor extends HandlerInterceptorAdapter {

    private Tokenizer tokenizer;

    @Autowired
    public APIAuthInterceptor(Tokenizer tokenizer) {

        this.tokenizer = tokenizer;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {


        HttpSession session = request.getSession(false);


        if (request.getRequestURI().equals("/sign_in") || request.getRequestURI().equals("/")) {
            if (session != null && session.getAttribute("userID") != null) {
                response.sendRedirect("/home");
                return false;
            }

            return true;
        }
        if (request.getRequestURI().equals("/sign_up")) {
            return true;
        }

        if (session != null) {
            String authToken = (String) session.getAttribute("auth_token");
            if (authToken != null) {
                int userID = verifyToken((String) session.getAttribute("auth_token"));
                if ((userID == 0) || (userID != (Integer) session.getAttribute("userID"))) {//auth failed

                    response.setHeader("Error", "invalid token");
                    response.sendRedirect("/");
                    return false;
                }
                if (isWriteRequest(request.getRequestURI())) {
                    if (!request.getRequestURI().startsWith("/"+String.valueOf(userID))) {   //API calls will only be made on data
                        response.setHeader("Error", "access denied ");
                        response.sendRedirect("/home");
                        return false;
                    }

                }

                return true;
            }
        }


        if ("/get_token".equals(request.getRequestURI()))
            return true;

        String authToken = request.getParameter("auth_token");
        if (authToken == null) {

            response.setHeader("Error", "Auth token required");
            response.sendRedirect("/");
            return false;

        }


        int userID = verifyToken(authToken);
        if (userID == 0) {//auth failed
            response.setHeader("Error", "invalid token");
            response.sendRedirect("/");
            return false;
        }
        session = request.getSession(true);
        session.setAttribute("userID", userID);

        if (isWriteRequest(request.getRequestURI())) {
            if (!request.getRequestURI().startsWith("/"+String.valueOf(userID))) {   //API calls will only be made on data
                response.setHeader("Error", "access denied ");
                response.sendRedirect("/home");
                return false;
            }
        }


        return true;
    }


    private Integer verifyToken(String token) {
        return tokenizer.validateToken(token);
    }

    private static boolean isWriteRequest(String reqestUrl) {
        String[] urlsList = reqestUrl.split("/", 3);
        if (urlsList.length > 2) {
            if (urlsList[2].equals("tweets/new") || urlsList[2].equals("retweet") || urlsList[2].equals("edit"))
                return true;
            else
                return false;

        } else
            return false;
    }
}
