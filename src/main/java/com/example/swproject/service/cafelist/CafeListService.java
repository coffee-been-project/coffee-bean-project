package com.example.swproject.service.cafelist;


import com.example.swproject.dto.cafelist.CafeListDTO;

import java.util.List;

public interface CafeListService {

    List<CafeListDTO> getCafeList(String bean, String method);
    CafeListDTO getCafeInfo(int cafe_code);

}
