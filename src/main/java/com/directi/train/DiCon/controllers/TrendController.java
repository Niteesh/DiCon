package com.directi.train.DiCon.controllers;

import com.directi.train.DiCon.services.DAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
public class TrendController {

    @Autowired
    private DAO dao;

    @RequestMapping(value = "trends", method = RequestMethod.GET)
    @ResponseBody
    public List<Map<String, Object>> getTrends() {
        return dao.getTrendingNow();
    }
}
