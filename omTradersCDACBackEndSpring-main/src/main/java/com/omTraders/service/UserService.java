package com.omTraders.service;

import com.omTraders.exception.UserException;
import com.omTraders.model.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;

}
