package com.example.swproject.service;

import com.example.swproject.dto.CafeReviewDTO;

import java.util.List;

public interface CafeReviewService {
    List<CafeReviewDTO> getCafeReview(int cafe_host_code);
}
