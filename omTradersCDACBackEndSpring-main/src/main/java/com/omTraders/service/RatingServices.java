package com.omTraders.service;

import java.util.List;

import com.omTraders.exception.ProductException;
import com.omTraders.model.Rating;
import com.omTraders.model.User;
import com.omTraders.request.RatingRequest;

public interface RatingServices {
	
	public Rating createRating(RatingRequest req,User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);

}
