package com.revature.ers.service;

import java.util.List;

import com.revature.ers.model.User;

public interface UserService {
	List<User> findAll();
    User findOne(String username);
}
