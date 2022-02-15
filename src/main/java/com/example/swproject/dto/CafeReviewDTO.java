package com.example.swproject.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CafeReviewDTO {
    private int review_id;
    private String review_picture;
    private String review_user_id;
    private String text;
    private String open;
    private int review_cafe_host_code;
}
