package com.example.swproject.service.cafeuser;

import com.example.swproject.dto.cafeuser.CafeUserDTO;
import com.example.swproject.dto.cafeuser.UserCafeDTO;
import com.example.swproject.dto.cafeuser.UserPreferDTO;

import java.util.List;

public interface CafeUserService {
    CafeUserDTO getUserData(String user_id);

    UserCafeDTO getUserCafe(String user_id);

    List<UserPreferDTO> getUserPrefer(String user_id);
}
