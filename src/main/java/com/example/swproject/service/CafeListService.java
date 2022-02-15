package com.example.swproject.service;

import com.example.swproject.dto.CafeListDTO;

import java.util.List;

public interface CafeListService {

    List<CafeListDTO> getCafeList();
    CafeListDTO getCafeInfo(int cafe_host_code);
}
