package com.omTraders.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.omTraders.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);

}
