package com.example.swproject.controller.cafereview;

import com.example.swproject.dto.cafereview.CafeReviewDTO;
import com.example.swproject.service.cafereview.CafeReviewListService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*",maxAge = 3600)
@RestController
@RequiredArgsConstructor
@RequestMapping("/cafe_list")
public class CafeReviewListController {

    private final CafeReviewListService cafeReviewListService;

    @GetMapping("/{cafe_code}/review_list")
    public List<CafeReviewDTO> getCafeReview(@PathVariable int cafe_code) {
        return cafeReviewListService.getCafeReview(cafe_code);
    }

    @GetMapping("/{cafe_code}/review_list/{review_code}/review_detail")
    public CafeReviewDTO getCafeReviewDetail(@PathVariable int review_code) {
        return cafeReviewListService.getCafeReviewDetail(review_code);
    }
}
