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
        System.out.println("session = " + session + "  for  :"+ request.getRequestURI());

        if (request.getRequestURI().equals("/sign_in") || request.getRequestURI().equals("/")) {
            if (session != null && session.getAttribute("userID") != null) {
                response.sendRedirect("/home");
                return false;
            }
            System.out.println("returning true because no session nd sign in  or /");
            return true;
        }
        if (request.getRequestURI().equals("/sign_up")) {
            return true;
        }

        if (session != null) {
            String authToken = (String) session.getAttribute("auth_token");
            if (authToken != null) {
                int userID =  verifyToken((String) session.getAttribute("auth_token"));
                System.out.println("auth token :"+request.getParameter("auth_token")+"\nfor uid:"+ userID);
                if((userID == 0) || (userID != (Integer)session.getAttribute("userID"))){//auth failed
                    String responseJson = "{\"success\":0, \"error\":\"invalid token\" }";
                    // response.getWriter().write(responseJson);
                    response.sendError(0,responseJson);
                    return false;
                }
                return true;
            }
        }





        if("/get_token".equals(request.getRequestURI()))
            return true;

        String authToken = request.getParameter("auth_token");
        if(authToken == null){
            String responseJson = "{\"success\":0, \"error\":\"auth token required\" }";
            response.setHeader("Error","Auth token required");
            response.sendRedirect("/");
            return false;

        }


        int userID =  verifyToken(authToken);
        if(userID == 0){//auth failed
            String responseJson = "{\"success\":0, \"error\":\"invalid token\" }";
           // response.getWriter().write(responseJson);
            response.sendError(0,responseJson);
            return false;
        }
        session = request.getSession(true);
        session.setAttribute("userID",userID);
        if(!request.getPathTranslated().startsWith(String.valueOf(userID))){
            String responseJson = "{\"success\":0, \"error\":\"access denied\" }";
            // response.getWriter().write(responseJson);
            response.sendError(0,responseJson);
            return false;
        }


        return true;
    }



    private Integer verifyToken(String token) {
        return tokenizer.validateToken(token);
    }


}
