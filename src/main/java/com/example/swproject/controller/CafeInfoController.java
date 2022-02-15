package com.example.swproject.controller;

import com.example.swproject.dto.CafeListDTO;
import com.example.swproject.service.CafeListService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/cafe_list")
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequiredArgsConstructor
public class CafeInfoController {

    private final CafeListService cafeListService;

    @GetMapping( "/{cafe_host_code}")
    public CafeListDTO getCafeInfo(@PathVariable int cafe_host_code){
        return cafeListService.getCafeInfo(cafe_host_code);
    }

}