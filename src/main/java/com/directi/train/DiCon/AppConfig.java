package com.directi.train.DiCon;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.simple.SimpleJdbcTemplate;

@Configuration
public class AppConfig {
    @Bean
    public SimpleJdbcTemplate simpleJdbcTemplate() {
        BasicDataSource dataSource = new BasicDataSource();

        dataSource.setUrl("jdbc:postgresql://172.16.154.229:5432/postgres");

        dataSource.setDriverClassName("org.postgresql.Driver");
        dataSource.setUsername("postgres");
        dataSource.setPassword("medusa@123");
        SimpleJdbcTemplate db = new SimpleJdbcTemplate(dataSource);

        return db;
    }

    @Bean
    public ThreadLocal<Integer> loginID() {
        return new ThreadLocal<Integer>();
    }
}
