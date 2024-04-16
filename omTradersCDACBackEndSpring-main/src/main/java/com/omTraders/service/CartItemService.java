package com.omTraders.service;

import com.omTraders.exception.CartItemException;
import com.omTraders.exception.UserException;
import com.omTraders.model.Cart;
import com.omTraders.model.CartItem;
import com.omTraders.model.Product;

public interface CartItemService {
	
	public CartItem createCartItem(CartItem cartItem);
	
	public CartItem updateCartItem(Long userId, Long id,CartItem cartItem) throws CartItemException, UserException;
	
	public CartItem isCartItemExist(Cart cart,Product product,String size, Long userId);
	
	public void removeCartItem(Long userId,Long cartItemId) throws CartItemException, UserException;
	
	public CartItem findCartItemById(Long cartItemId) throws CartItemException;
	
}
