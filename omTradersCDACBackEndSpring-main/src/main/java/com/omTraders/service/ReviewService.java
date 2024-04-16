package com.omTraders.service;

import java.util.List;

import com.omTraders.exception.ProductException;
import com.omTraders.model.Review;
import com.omTraders.model.User;
import com.omTraders.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req,User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
	
	
}
