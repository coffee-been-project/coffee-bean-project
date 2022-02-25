package com.example.swproject.service.cafereview;

import com.example.swproject.dto.cafereview.CafeReviewDTO;
import com.example.swproject.mapper.cafereview.CafeReviewListMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class CafeReviewListServiceImp implements CafeReviewListService{


    private final CafeReviewListMapper cafeReviewMapper;

    @Override
    public List<CafeReviewDTO> getCafeReview(int cafe_code) {
        return cafeReviewMapper.getCafeReview(cafe_code);
    }

    @Override
    public CafeReviewDTO getCafeReviewDetail(int review_code){
        return cafeReviewMapper.getCafeReviewDetail(review_code);
    }
}