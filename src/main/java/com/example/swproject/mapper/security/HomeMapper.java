package com.example.swproject.mapper.security;

import com.example.swproject.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Mapper
public interface HomeMapper {

    //유저 정보
    ArrayList<UserVO> findByUserId(@Param("user_id") String user_id);

    //유저 저장
    void userSave(UserVO userVO);
//
//    //유저 권한 저장
//    int userRoleSave(@Param("userNo") int userNo,@Param("roleNo") int roleNo);
//
//    //유저 FK번호 알아내기
//    int findUserNo(@Param("id") String id);
//
//    //권한 FK번호 알아내기
//    int findRoleNo(@Param("roleName") String roleName);
}