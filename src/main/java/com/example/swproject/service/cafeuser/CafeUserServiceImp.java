package com.example.swproject.service.cafeuser;


import com.example.swproject.dto.cafeuser.CafeUserDTO;
import com.example.swproject.dto.cafeuser.UserCafeDTO;
import com.example.swproject.dto.cafeuser.UserPreferDTO;
import com.example.swproject.mapper.cafeuser.CafeUserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CafeUserServiceImp implements CafeUserService{

    private final CafeUserMapper cafeUserMapper;

    @Override
    public CafeUserDTO getUserData(String user_id) {
        return cafeUserMapper.getUserData(user_id);
    }

    @Override
    public UserCafeDTO getUserCafe(String user_id) {
        return cafeUserMapper.getUserCafe(user_id);

    }

    @Override
    public List<UserPreferDTO> getUserPrefer(String user_id) {
        return cafeUserMapper.getUserPrefer(user_id);
    }
}
