package com.omTraders.service;

import java.util.List;
import java.util.Optional;

import com.omTraders.model.Employee;

public interface EmployeeServiceInterface {
	public Employee saveEmployee(Employee employee);
    public Optional<Employee> getEmployeeById(Long id);
    List<Employee> getAllEmployee();
    Employee updateEmployee(Long id, Employee employee);
    void deleteEmployee(Long id);
}
