package com.directi.train.DiCon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Created with IntelliJ IDEA.
 * User: niteeshk
 * Date: 7/8/12
 * Time: 6:58 PM
 * To change this template use File | Settings | File Templates.
 */
@Controller
public class APIAuthInterceptor  extends HandlerInterceptorAdapter {
    private final ThreadLocal<Integer> userID;

    @Autowired
    public APIAuthInterceptor(@Qualifier(value = "userID") ThreadLocal<Integer> userID) {
        this.userID = userID;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {

        HttpSession session = request.getSession(false);
        if(request.getRequestURI().equals("/")||request.getRequestURI().equals("/sign_in")||request.getRequestURI().equals("/sign_up")){
//            if(session!=null){
//                response.sendRedirect("home");
//                return false;
//            }
            return true;
        }
        if (session != null) {
            String email = (String) session.getAttribute("email");
            if (email != null) {
                userID.set((Integer) session.getAttribute("userID"));
                return true;
            }
        }

        response.sendRedirect("/");
        return false;
    }
}