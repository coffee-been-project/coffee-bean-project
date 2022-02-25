package com.example.swproject.controller.cafelist;

import com.example.swproject.dto.cafelist.CafeCoffeeDTO;
import com.example.swproject.dto.cafelist.CafeListDTO;
import com.example.swproject.service.cafelist.CafeCoffeeListService;
import com.example.swproject.service.cafelist.CafeListService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/cafe_list")
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequiredArgsConstructor
public class CafeInfoController {

    private final CafeListService cafeListService;
    private final CafeCoffeeListService cafeCoffeeService;

    @GetMapping( "/{cafe_host_code}")
    public CafeListDTO getCafeInfo(@PathVariable int cafe_host_code){
        return cafeListService.getCafeInfo(cafe_host_code);
    }

    @GetMapping( "/{cafe_host_code}/coffee")
    public List<CafeCoffeeDTO> getCafeCoffee(@PathVariable int cafe_host_code){
        return cafeCoffeeService.getCafeCoffee(cafe_host_code);
    }
}