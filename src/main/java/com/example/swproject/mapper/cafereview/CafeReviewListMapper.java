package com.example.swproject.mapper.cafereview;

import com.example.swproject.dto.cafereview.CafeReviewDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CafeReviewListMapper {
    List<CafeReviewDTO> getCafeReview(int cafe_code);
    CafeReviewDTO getCafeReviewDetail(int review_code);

}