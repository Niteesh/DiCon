package com.directi.train.DiCon.controllers;

import com.directi.train.DiCon.services.DAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Controller
public class SearchController {

    @Autowired
    private DAO dao;

    @RequestMapping(value="search.json",method= RequestMethod.POST)
    @ResponseBody
    public List<Map<String, Object>> searchQuery(@RequestParam String search_string, HttpSession session){
        return dao.searchByFullname(search_string);
    }

}
