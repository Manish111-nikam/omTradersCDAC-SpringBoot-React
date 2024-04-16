package com.omTraders.model;

import java.time.LocalDateTime;

import com.omTraders.user.domain.EmployeeStatus;
import com.omTraders.user.domain.UserRole;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;

@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String mobileNo;
    private String AadharCardNo;
    private double Salary;
    private LocalDateTime CreatedAt;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private EmployeeStatus status = EmployeeStatus.Employee_Working ;
    
    public Employee() {
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getAadharCardNo() {
		return AadharCardNo;
	}

	public void setAadharCardNo(String aadharCardNo) {
		this.AadharCardNo = aadharCardNo;
	}

	public LocalDateTime getCreatedAt() {
		return CreatedAt;
	}
    @PrePersist
	public void setCreatedAt() {
		this.CreatedAt = LocalDateTime.now();
	}

	public EmployeeStatus getStatus() {
		return status;
	}

	public void setStatus(EmployeeStatus status) {
		this.status = status;
	}

	public double getSalary() {
		return Salary;
	}

	public void setSalary(double salary) {
		this.Salary = salary;
	}

    
}
