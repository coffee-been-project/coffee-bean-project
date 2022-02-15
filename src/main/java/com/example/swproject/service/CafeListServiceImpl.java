package com.example.swproject.service;

import com.example.swproject.dto.CafeListDTO;
import com.example.swproject.mapper.CafeInfoMapper;
import com.example.swproject.mapper.CafeListMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CafeListServiceImpl implements CafeListService {

    private final CafeListMapper cafeListMapper;
    private final CafeInfoMapper cafeInfoMapper;

    @Override
    public List<CafeListDTO> getCafeList() {
        return cafeListMapper.getCafeList();
    }

    @Override
    public CafeListDTO getCafeInfo(int cafe_host_code){
        return cafeInfoMapper.getCafeInfo(cafe_host_code);
    }
}

