package com.example.swproject.mapper.cafelist;

import com.example.swproject.dto.cafelist.CafeCoffeeDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CafeCoffeeMapper {
    List<CafeCoffeeDTO> getCafeCoffee(int cafe_code);

}
