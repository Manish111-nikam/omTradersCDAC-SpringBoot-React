package com.omTraders.service;

import com.omTraders.exception.ProductException;
import com.omTraders.model.Cart;
import com.omTraders.model.CartItem;
import com.omTraders.model.User;
import com.omTraders.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public String addCartItem(Long userId,AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);

}
