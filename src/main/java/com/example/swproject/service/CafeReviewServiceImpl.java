package com.example.swproject.service;

import com.example.swproject.dto.CafeReviewDTO;
import com.example.swproject.mapper.CafeReviewMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class CafeReviewServiceImpl implements CafeReviewService{

    private final CafeReviewMapper cafeReviewMapper;

    @Override
    public List<CafeReviewDTO> getCafeReview(int cafe_host_code) {
        return cafeReviewMapper.getCafeReview(cafe_host_code);
    }

}


