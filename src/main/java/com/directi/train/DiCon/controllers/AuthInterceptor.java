package com.directi.train.DiCon.controllers;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class AuthInterceptor extends HandlerInterceptorAdapter {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {

        HttpSession session = request.getSession(false);
        if (request.getRequestURI().equals("/sign_in") || request.getRequestURI().equals("/")) {
            if (session != null && session.getAttribute("email") != null) {
                response.sendRedirect("/home");
                return false;
            }
            return true;
        }
        if (request.getRequestURI().equals("/sign_up")) {
            return true;
        }

        if (session != null) {
            String email = (String) session.getAttribute("email");
            if (email != null) {


                return true;
            }
        }

        response.sendRedirect("/");
        return false;
    }
}
