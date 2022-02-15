package com.example.swproject.controller;

import com.example.swproject.dto.CafeListDTO;
import com.example.swproject.service.CafeListService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequiredArgsConstructor
public class CafeListController {

    private final CafeListService cafeListService;

    @GetMapping( "/cafe_list")
    public List<CafeListDTO> getCafeList(){
        return cafeListService.getCafeList();
    }

}
