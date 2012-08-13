package com.directi.train.DiCon.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * Created with IntelliJ IDEA.
 * User: niteeshk
 * Date: 9/8/12
 * Time: 10:07 PM
 * To change this template use File | Settings | File Templates.
 */

@Service
public class Tokenizer {
    @Autowired
    private DAO dao;

    public Tokenizer(){

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

    public String getToken(){
//        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
//        Date date = new Date();
        //todo impliment a btr method

        return getMD5(String.valueOf(System.nanoTime()));
    }

   public Integer validateToken(String token){
       if(token == null){
            return 0;
       }

       return dao.getUidForToken(token);

   }

   public  int registerToken(Integer user_id, String token){
       return dao.newToken(user_id,token);
   }

   public int invalidateToken(String token){
       return dao.deleteToken(token);
   }
}
