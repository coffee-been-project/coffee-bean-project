package com.example.swproject.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CafeMenuDTO {
    private String coffee_name;
    private String coffee_used_bean;
    private int coffee_price;
    private String coffee_process_method;
    private String coffee_image;
    private int coffee_code;
    private int cafe_host_code;
}
