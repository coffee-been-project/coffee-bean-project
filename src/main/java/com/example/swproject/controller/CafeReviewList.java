package com.example.swproject.controller;

import com.example.swproject.dto.CafeReviewDTO;
import com.example.swproject.service.CafeReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/cafe_list/{cafe_host_code}")

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequiredArgsConstructor
public class CafeReviewList {

    private final CafeReviewService cafeReviewService;

    @GetMapping("/review_list")
    public List<CafeReviewDTO> getCafeReview(@PathVariable int cafe_host_code){
        return cafeReviewService.getCafeReview(cafe_host_code);
    }

}
