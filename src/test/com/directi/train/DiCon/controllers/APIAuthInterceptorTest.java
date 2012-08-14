package com.directi.train.DiCon.controllers;

import com.directi.train.DiCon.services.Tokenizer;
import org.junit.Before;
import org.junit.Test;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import static junit.framework.Assert.assertFalse;
import static junit.framework.Assert.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class APIAuthInterceptorTest {
    HttpServletRequest request;
    HttpServletResponse response;
    Tokenizer tokenizer;
    HttpSession session;

    @Before
    public void setUp() throws Exception {
        request = mock(HttpServletRequest.class);
        tokenizer = mock(Tokenizer.class);
        response = mock(HttpServletResponse.class);
        session = mock(HttpSession.class);
    }

    @Test
    public void testSigninWithSessionNull() throws Exception {

        when(request.getSession(false)).thenReturn(null);
        when(request.getRequestURI()).thenReturn("/sign_in");
        APIAuthInterceptor apiAuthInterceptor = new APIAuthInterceptor(tokenizer);

        assertTrue(apiAuthInterceptor.preHandle(request,response,new Object()));
    }

    @Test
    public void testSigninWithSessionNotNull() throws Exception {

        when(request.getSession(false)).thenReturn(session);
        when(session.getAttribute("userID")).thenReturn(102);
        //session.setAttribute("userID",102);
        when(request.getRequestURI()).thenReturn("/sign_in");

        APIAuthInterceptor apiAuthInterceptor = new APIAuthInterceptor(tokenizer);

       assertFalse(apiAuthInterceptor.preHandle(request, response, new Object()));
       verify(response).sendRedirect("/home");
    }

    @Test
    public void testIndexWithSessionNull() throws Exception {
        when(request.getSession(false)).thenReturn(null);
        when(request.getRequestURI()).thenReturn("/");
        APIAuthInterceptor apiAuthInterceptor = new APIAuthInterceptor(tokenizer);

        assertTrue(apiAuthInterceptor.preHandle(request,response,new Object()));
    }

    @Test
    public void testIndexWithSessionNotNull() throws Exception {
        when(request.getSession(false)).thenReturn(session);
        when(session.getAttribute("userID")).thenReturn(102);
        //session.setAttribute("userID",102);
        when(request.getRequestURI()).thenReturn("/");

        APIAuthInterceptor apiAuthInterceptor = new APIAuthInterceptor(tokenizer);

        assertFalse(apiAuthInterceptor.preHandle(request, response, new Object()));
        verify(response).sendRedirect("/home") ;
    }

    @Test
    public void testSignUpWithSessionNull() throws Exception {
        when(request.getSession(false)).thenReturn(null);
        when(request.getRequestURI()).thenReturn("/sign_up");
        APIAuthInterceptor apiAuthInterceptor = new APIAuthInterceptor(tokenizer);

        assertTrue(apiAuthInterceptor.preHandle(request,response,new Object()));
    }

    @Test
    public void testSignUpSessionNotNull() throws Exception {
        when(request.getSession(false)).thenReturn(session);
        when(request.getRequestURI()).thenReturn("/sign_up");

        APIAuthInterceptor apiAuthInterceptor = new APIAuthInterceptor(tokenizer);

        assertTrue(apiAuthInterceptor.preHandle(request, response, new Object()));
    }

    @Test
    public void testHomeWithSessionNullNoAuthToken() throws Exception {
        when(request.getSession(false)).thenReturn(null);
        when(request.getRequestURI()).thenReturn("/home");
        when(request.getParameter("auth_token")).thenReturn(null);

        APIAuthInterceptor apiAuthInterceptor = new APIAuthInterceptor(tokenizer);

        assertFalse(apiAuthInterceptor.preHandle(request, response, new Object()));
        verify(response).sendRedirect("/");
    }

    @Test
    public void testHomeWithSessionNullValidAuthToken() throws Exception {
        when(request.getSession(false)).thenReturn(null);
        when(request.getRequestURI()).thenReturn("/home");
        when(request.getParameter("auth_token")).thenReturn("jackForTest");
        when(request.getSession(true)).thenReturn(session);
        when(request.getPathTranslated()).thenReturn("home") ;
        when(tokenizer.validateToken("jackForTest")).thenReturn(102);

        APIAuthInterceptor apiAuthInterceptor = new APIAuthInterceptor(tokenizer);

        assertTrue(apiAuthInterceptor.preHandle(request, response, new Object()));
        verify(tokenizer).validateToken("jackForTest");
    }


    @Test
    public void testHomeWithSessionNullInvalidAuthToken() throws Exception {
        when(request.getSession(false)).thenReturn(null);
        when(request.getRequestURI()).thenReturn("/home");
        when(request.getParameter("auth_token")).thenReturn("jackForTest");
        when(request.getSession(true)).thenReturn(session);
        when(request.getPathTranslated()).thenReturn("home") ;
        when(tokenizer.validateToken("jackForTest")).thenReturn(0);

        APIAuthInterceptor apiAuthInterceptor = new APIAuthInterceptor(tokenizer);

        assertFalse(apiAuthInterceptor.preHandle(request, response, new Object()));
        verify(response).sendRedirect("/");
        verify(tokenizer).validateToken("jackForTest");
    }

    @Test
    public void testNewTweetWithSessionNullValidAuthToken() throws Exception {
        when(request.getSession(false)).thenReturn(null);
        when(request.getRequestURI()).thenReturn("/102/tweet/new");
        when(request.getParameter("auth_token")).thenReturn("jackForTest");
        when(request.getSession(true)).thenReturn(session);
        when(tokenizer.validateToken("jackForTest")).thenReturn(102);

        APIAuthInterceptor apiAuthInterceptor = new APIAuthInterceptor(tokenizer);

        assertTrue(apiAuthInterceptor.preHandle(request, response, new Object()));

        verify(tokenizer).validateToken("jackForTest");
    }



    @Test
    public void testNewTweetsWithSessionNullInvalidAuthToken() throws Exception {
        when(request.getSession(false)).thenReturn(null);
        when(request.getRequestURI()).thenReturn("/102/tweer/new");
        when(request.getParameter("auth_token")).thenReturn("jackForTest");
        when(request.getSession(true)).thenReturn(session);
        when(tokenizer.validateToken("jackForTest")).thenReturn(0);

        APIAuthInterceptor apiAuthInterceptor = new APIAuthInterceptor(tokenizer);

        assertFalse(apiAuthInterceptor.preHandle(request, response, new Object()));
        verify(response).sendRedirect("/");
        verify(tokenizer).validateToken("jackForTest");
    }

    @Test
    public void testNewsfeedSessionNullValidAuthTokenSameUser() throws Exception {
        when(request.getSession(false)).thenReturn(null);
        when(request.getRequestURI()).thenReturn("/102/newsfeed");
        when(request.getParameter("auth_token")).thenReturn("jackForTest");
        when(request.getSession(true)).thenReturn(session);
        when(tokenizer.validateToken("jackForTest")).thenReturn(102);

        APIAuthInterceptor apiAuthInterceptor = new APIAuthInterceptor(tokenizer);

        assertTrue(apiAuthInterceptor.preHandle(request, response, new Object()));
        verify(tokenizer).validateToken("jackForTest");
    }

    @Test
    public void testNewsfeedSessionNullValidAuthTokenDiffUser() throws Exception {
        when(request.getSession(false)).thenReturn(session);
        when(request.getRequestURI()).thenReturn("/102/newsfeed");
        when(request.getParameter("auth_token")).thenReturn("jackForTest");
        when(request.getSession(true)).thenReturn(session);
        when(tokenizer.validateToken("jackForTest")).thenReturn(103);

        APIAuthInterceptor apiAuthInterceptor = new APIAuthInterceptor(tokenizer);

        assertTrue(apiAuthInterceptor.preHandle(request, response, new Object()));
        verify(tokenizer).validateToken("jackForTest");
    }

    @Test
    public void testNewsfeedSessionNotNullValidAuthTokenSameUser() throws Exception {
        when(request.getSession(false)).thenReturn(session);
        when(request.getRequestURI()).thenReturn("/102/newsfeed");
        when(session.getAttribute("auth_token")).thenReturn("jackForTest");

        when(tokenizer.validateToken("jackForTest")).thenReturn(102);
        when(session.getAttribute("userID")).thenReturn(102);

        APIAuthInterceptor apiAuthInterceptor = new APIAuthInterceptor(tokenizer);

        assertTrue(apiAuthInterceptor.preHandle(request, response, new Object()));
        verify(tokenizer).validateToken("jackForTest");
    }

    @Test
    public void testNewsfeedSessionNotNullValidAuthTokenDiffUser() throws Exception {
        when(request.getSession(false)).thenReturn(session);
        when(request.getRequestURI()).thenReturn("/102/newsfeed");
        when(session.getAttribute("auth_token")).thenReturn("jackForTest");

        when(tokenizer.validateToken("jackForTest")).thenReturn(103);
        when(session.getAttribute("userID")).thenReturn(103);

        APIAuthInterceptor apiAuthInterceptor = new APIAuthInterceptor(tokenizer);

        assertTrue(apiAuthInterceptor.preHandle(request, response, new Object()));
        verify(tokenizer).validateToken("jackForTest");
    }
}
