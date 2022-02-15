package com.example.swproject.mapper;


import com.example.swproject.dto.CafeMenuDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface CafeMenuMapper {

    List<CafeMenuDTO> getCafeMenu();

}
