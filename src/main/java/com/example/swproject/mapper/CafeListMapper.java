package com.example.swproject.mapper;

import com.example.swproject.dto.CafeListDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CafeListMapper {
    List<CafeListDTO> getCafeList();

}
