package com.example.swproject.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

@Getter
@Setter
@ToString
public class UserVO{

    private String user_id;
    private String user_password;
    private String user_name;
    private String user_gender;
    private String user_email;
    private int user_age;
    private String user_ishost;
    private String user_password_question;
    private String user_password_answer;


//
//    private int userNo; //회원 pk
//    private String id; //회원 아이디
//    private String password;// 비밀번호
//    private String name; // 회원 이름
//
//    private String roleName; //권한 이름

}