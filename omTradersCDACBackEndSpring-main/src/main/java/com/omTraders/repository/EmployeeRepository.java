package com.omTraders.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.omTraders.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	
}

