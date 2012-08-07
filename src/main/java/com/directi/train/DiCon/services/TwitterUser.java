package com.directi.train.DiCon.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Map;
import java.util.regex.Pattern;



@Service
public class TwitterUser {
    public DAO dao;
    private static final Pattern emailPattern = Pattern.compile(
            "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
    );

    @Autowired
    public TwitterUser(DAO dao){
        this.dao = dao;
    }

    public static String getMD5(String text){
        try{
        MessageDigest algorithm = MessageDigest.getInstance("MD5");
        algorithm.reset();
        algorithm.update(text.getBytes());
        byte md5hash[] = algorithm.digest();
        StringBuffer hexString = new StringBuffer();

        for (int i=0;i<md5hash.length;i++) {
            hexString.append(Integer.toHexString((md5hash[i] & 0xFF) | 0x100).substring(1, 3));
        }

          return hexString.toString();


        }catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return null;
    }

   public Integer authanticateUser(String email, String password) throws EmptyResultDataAccessException {

           Map<String, Object> userData = dao.getLoginDetails(email,password);
           if(userData.get("password").toString().trim().equals(getMD5(password).trim())){

               return Integer.valueOf(userData.get("user_id").toString());    //db.queryForMap("select fullname from public.userdata where uid=?;",userData.get("uid")).get("fullname").toString();//
           }


        return 0;
   }

    public boolean isUserExist(String email){
        int i=0;
         i = dao.findUsername(email)   ;
         return i==0 ? false :true;
    }

    public Integer addUser(String fullname, String email, String password) {
        dao.newUser(email,password,fullname);
        return dao.matchPassword(email, password) ;
    }

    public void removeUser(String email) {
               //todo impliment this
    }

    public static boolean isValidEmail(String email){
        return emailPattern.matcher(email).matches();

    }

}

