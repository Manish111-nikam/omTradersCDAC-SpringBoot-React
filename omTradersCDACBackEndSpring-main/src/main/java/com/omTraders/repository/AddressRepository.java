package com.omTraders.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.omTraders.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
