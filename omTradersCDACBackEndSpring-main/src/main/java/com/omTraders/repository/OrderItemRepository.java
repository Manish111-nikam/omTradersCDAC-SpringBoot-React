package com.omTraders.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.omTraders.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
