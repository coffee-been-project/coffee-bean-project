package com.example.swproject.service.cafereview;

import com.example.swproject.dto.cafereview.CafeReviewDTO;

import java.util.List;

public interface CafeReviewListService {
    List<CafeReviewDTO> getCafeReview(int cafe_code);
    CafeReviewDTO getCafeReviewDetail(int review_code);
}