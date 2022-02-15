package com.example.swproject.mapper;

import com.example.swproject.dto.CafeListDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CafeInfoMapper {
    CafeListDTO getCafeInfo(int cafe_host_code);
}
