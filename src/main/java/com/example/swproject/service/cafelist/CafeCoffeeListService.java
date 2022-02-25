package com.example.swproject.service.cafelist;

import com.example.swproject.dto.cafelist.CafeCoffeeDTO;

import java.util.List;

public interface CafeCoffeeListService {
    List<CafeCoffeeDTO> getCafeCoffee(int cafe_code);
}

