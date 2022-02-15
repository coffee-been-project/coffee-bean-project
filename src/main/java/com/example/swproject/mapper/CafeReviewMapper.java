package com.example.swproject.mapper;

import com.example.swproject.dto.CafeReviewDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CafeReviewMapper {
    List<CafeReviewDTO> getCafeReview(int cafe_host_code);
}
