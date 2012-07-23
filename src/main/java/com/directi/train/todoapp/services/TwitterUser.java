package com.directi.train.todoapp.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.simple.SimpleJdbcTemplate;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Map;
import java.util.regex.Pattern;


/**
 * Created with IntelliJ IDEA.
 * User: niteeshk
 * Date: 20/7/12
 * Time: 3:20 PM                    SimpleJdbcTemplate db
 * To change this template use File | Settings | File Templates.
 */

@Service
public class TwitterUser {
    public SimpleJdbcTemplate db;
    private static final Pattern eamilPattern = Pattern.compile(
            "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
    );

    @Autowired
    public TwitterUser(SimpleJdbcTemplate db){
        this.db = db;
    }

    public static String getMD5(String text){
        try{
        MessageDigest algorithm = MessageDigest.getInstance("MD5");
        algorithm.reset();
        algorithm.update(text.getBytes());
        byte md5hash[] = algorithm.digest();
        StringBuffer hexString = new StringBuffer();

        for (int i=0;i<md5hash.length;i++) {
            hexString.append(Integer.toHexString((md5hash[i] & 0xFF) | 0x100).substring(1,3));
        }

          return hexString.toString();


        }catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return null;
    }

   public Integer authanticateUser(String email, String password){
       try {
           Map<String, Object> userData = db.queryForMap("select uid, email, password from public.user where email=?", email);

           if(userData.get("password").toString().trim().equals(getMD5(password).trim())){

               return 3;
           }
       }catch (EmptyResultDataAccessException e) {
           return 2;
       }

        return 0;
   }

    public boolean isUserExist(String email){
        int i=0;
         i = db.queryForInt("SELECT count(1) FROM public.user WHERE email = ?",email);
         return i==0 ? false :true;
    }

    public void addUser(String uName, String email, String password) {

        db.update("INSERT into public.user(email,password) VALUES(?,MD5(?))", email, password) ;
    }

    public void removeUser(String email) {

    }

    public static boolean isValidEmail(String email){
        return eamilPattern.matcher(email).matches();

    }

}

