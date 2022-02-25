package com.example.swproject.mapper.cafeuser;

import com.example.swproject.dto.cafeuser.CafeUserDTO;
import com.example.swproject.dto.cafeuser.UserCafeDTO;
import com.example.swproject.dto.cafeuser.UserPreferDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CafeUserMapper {
    CafeUserDTO getUserData(String user_id);

    UserCafeDTO getUserCafe(String user_id);

    List<UserPreferDTO> getUserPrefer(String user_id);
}
