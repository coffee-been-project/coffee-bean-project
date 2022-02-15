package com.example.swproject.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CafeListDTO {
    private int cafe_host_code;
    private String cafe_name;
    private String cafe_phone;
    private String cafe_website;
    private String cafe_time;
    private String cafe_puppy_yesno;
    private String cafe_oterrace_yesno;
    private String cafe_wifi_yesno;
    private String cafe_location_x;
    private String cafe_location_y;
}
