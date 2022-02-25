package com.example.swproject.controller.security;

import com.example.swproject.service.security.HomeService;
import com.example.swproject.vo.UserPrincipalVO;
import com.example.swproject.vo.UserVO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.Principal;

@RestController
@RequiredArgsConstructor
public class UserRestController {


    private final HomeService homeService;

    @PostMapping("/user/save")
    public void saveUserInfo(
//            @RequestBody
//            application/x-www-form-urlencoded;charset=UTF-8' not supported 오류 해결 (React 연결 시에만 그런 듯)
                    UserVO userVO,
                    HttpServletResponse response) throws IOException {
        System.out.println(userVO.getUser_id());

        homeService.InsertUser(userVO);
        response.sendRedirect("http://localhost:8080/");
    }


//    @GetMapping("/user_code")
//    @ResponseBody
//    public static String currentUserName() {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        User user = (User) authentication.getPrincipal();
//        return userVo.getUser_id();
//    }


}