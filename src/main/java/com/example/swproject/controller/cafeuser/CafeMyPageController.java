package com.example.swproject.controller.cafeuser;

import com.example.swproject.dto.cafeuser.CafeUserDTO;
import com.example.swproject.dto.cafeuser.UserCafeDTO;
import com.example.swproject.dto.cafeuser.UserPreferDTO;
import com.example.swproject.service.cafeuser.CafeUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cafe_user")
@CrossOrigin(origins = "*", maxAge = 3600)
@RequiredArgsConstructor
public class CafeMyPageController {
    private final CafeUserService cafeUserService;

    @GetMapping( "/{user_id}")
    public CafeUserDTO getUserData(@PathVariable String user_id){
        return cafeUserService.getUserData(user_id);
    }

    @GetMapping("/{user_id}/userCafe")
    public UserCafeDTO getUserCafe(@PathVariable String user_id) {
        return cafeUserService.getUserCafe(user_id);
    }

    @GetMapping("/{user_id}/prefer")
    public List<UserPreferDTO> getUserPrefer(@PathVariable String user_id){
        return cafeUserService.getUserPrefer(user_id);
    }

}
