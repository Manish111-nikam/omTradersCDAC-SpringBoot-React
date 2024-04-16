package com.omTraders.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.omTraders.model.User;
import com.omTraders.repository.UserRepository;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
	
	@Autowired
	private UserRepository userRepository;
	
	public List<User> getAllCustomer(){
		return userRepository.findAll();
	}
}
