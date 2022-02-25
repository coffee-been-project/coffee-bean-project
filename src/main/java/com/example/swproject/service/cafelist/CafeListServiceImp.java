package com.example.swproject.service.cafelist;

import com.example.swproject.dto.cafelist.CafeListDTO;
import com.example.swproject.mapper.cafelist.CafeListMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CafeListServiceImp implements CafeListService{

    private final CafeListMapper cafeListMapper;

    @Override
    public List<CafeListDTO> getCafeList(String bean, String method) {
        System.out.println(bean);
        System.out.println(method);
        return cafeListMapper.getCafeList(bean, method);
    }

    @Override
    public CafeListDTO getCafeInfo(int cafe_code){
        return cafeListMapper.getCafeInfo(cafe_code);
    }

}

