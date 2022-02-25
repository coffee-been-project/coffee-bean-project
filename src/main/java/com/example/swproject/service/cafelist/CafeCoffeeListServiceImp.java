package com.example.swproject.service.cafelist;

import com.example.swproject.dto.cafelist.CafeCoffeeDTO;
import com.example.swproject.mapper.cafelist.CafeCoffeeMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class CafeCoffeeListServiceImp implements CafeCoffeeListService{
    private final CafeCoffeeMapper cafeCoffeeMapper;

    @Override
    public List<CafeCoffeeDTO> getCafeCoffee(int cafe_code) {
        return cafeCoffeeMapper.getCafeCoffee(cafe_code);
    }

}
