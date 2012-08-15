package com.directi.train.DiCon.services;

import org.springframework.stereotype.Service;

import java.util.HashMap;

/**
 * Created with IntelliJ IDEA.
 * User: niteeshk
 * Date: 8/8/12
 * Time: 1:04 PM
 * To change this template use File | Settings | File Templates.
 */
@Service
public class XSSHandler {
    private final HashMap<String,String> xmlCharHexMap;

    public XSSHandler(){
//        & --> &amp;
//        < --> &lt;
//        > --> &gt;
//        " --> &quot;
//        ' --> &#x27;     &apos; is not recommended
//        / --> &#x2F;     forward slash is included as it helps end an HTML entity
        xmlCharHexMap = new HashMap<String, String>();
        xmlCharHexMap.put("&", "&amp;");
        xmlCharHexMap.put("<", "&lt;");
        xmlCharHexMap.put(">","&gt;");
        xmlCharHexMap.put("\"", "&quot;");
        xmlCharHexMap.put("'","&#x27;");
        xmlCharHexMap.put("/", "&#x2F;");

    }
    public String makeXSSSafe(String text){
        for(String alpha : xmlCharHexMap.keySet()){
            System.out.println("replacing "+ alpha+ " with "+ xmlCharHexMap.get(alpha));
            text = text.replaceAll(alpha,xmlCharHexMap.get(alpha));
        }
      return text;
    }
}
