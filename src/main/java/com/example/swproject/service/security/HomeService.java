package com.example.swproject.service.security;

import com.example.swproject.mapper.security.HomeMapper;
import com.example.swproject.vo.UserPrincipalVO;
import com.example.swproject.vo.UserVO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class HomeService
        implements
        UserDetailsService
         {
    private final HomeMapper homeMapper;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

//    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = {Exception.class})
    public void InsertUser(UserVO userVO) {

        userVO.setUser_password(bCryptPasswordEncoder.encode(userVO.getUser_password()));
        homeMapper.userSave(userVO);
//        int flag = homeMapper.userSave(userVO);
//        if (flag > 0) {
//
//            int userNo = homeMapper.findUserNo(userVO.getId());
//            int roleNo = homeMapper.findRoleNo(userVO.getRoleName());
//
//            homeMapper.userRoleSave(userNo, roleNo);
//
//            return "success";
//        }
//        return "fail";
    }




             @Override
             public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
                 //DB로부터 회원 정보를 가져온다.
                 ArrayList<UserVO> userAuthes = homeMapper.findByUserId(id);

                 if(userAuthes.size() == 0) {
                     throw new UsernameNotFoundException("User "+id+" Not Found!");
                 }

                 return new UserPrincipalVO(userAuthes); //UserDetails 클래스를 상속받은 UserPrincipalVO 리턴한다.
             }
             }

