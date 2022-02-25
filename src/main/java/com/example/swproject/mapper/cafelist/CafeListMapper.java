package com.example.swproject.mapper.cafelist;

import com.example.swproject.dto.cafelist.CafeListDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CafeListMapper {
    List<CafeListDTO> getCafeList(String bean, String method);
    CafeListDTO getCafeInfo(int cafe_code);
}
