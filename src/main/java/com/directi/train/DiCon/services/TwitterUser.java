package com.directi.train.DiCon.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public Integer authanticateUser(String email, String password)  {

           Map<String, Object> userData = dao.getLoginDetails(email,password);
           if(userData.get("password").toString().trim().equals(Tokenizer.getMD5(password).trim())){

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

