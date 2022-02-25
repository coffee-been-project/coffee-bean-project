package com.example.swproject.config;

import com.example.swproject.service.security.HomeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private final HomeService homeService;

    @Bean
    public DaoAuthenticationProvider authenticationProvider(HomeService homeService) {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(homeService);
        authenticationProvider.setPasswordEncoder(bCryptPasswordEncoder);
        return authenticationProvider;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) {
        //실제 인증을 진행할 Provider
        auth.authenticationProvider(authenticationProvider(homeService));
    }

    @Override
    // js, css, image 설정은 보안 설정의 영향 밖에 있도록 만들어주는 설정.
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().requestMatchers(PathRequest.toStaticResources().atCommonLocations());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.authorizeRequests() .antMatchers("/", "/favicon.ico", "/**/*.png", "/**/*.gif", "/**/*.svg", "/**/*.jpg", "/**/*.html", "/**/*.css", "/**/*.js");


        http.csrf().disable();		// 개발 시 에만

        http.authorizeRequests()
                .antMatchers("/user/**").permitAll()			// 사용자 페이지
                .antMatchers("/admin/**").permitAll()				// 관리자 페이지
                .antMatchers("/login").permitAll()
                .antMatchers("/**").permitAll()
                        .antMatchers("/**/**/**").permitAll()
                        .antMatchers("/**/**").permitAll()
                .antMatchers("/cafe-list").permitAll();
              //  .antMatchers("/**").authenticated();

        http.formLogin()
                .loginPage("http://localhost:8080/login")
                .usernameParameter("username")
                .passwordParameter("password")
                .loginProcessingUrl("/loginProc")
                .successForwardUrl("http://localhost:8080/")
                .defaultSuccessUrl("http://localhost:8080/")
                .failureUrl("http://localhost:8080/login");


//                        .failureForwardUrl("http://localhost:3000/login")
//                                .successForwardUrl("http://localhost:3000/");

        http.logout()
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                .logoutSuccessUrl("/")
                .invalidateHttpSession(true);

        //http.authenticationProvider(authProvider);


//        //HTTP 관련 보안 설정 **가장 중요
//        http
//                .authorizeRequests()
//                .antMatchers("/user/save","/cafe-list","/cafe-info","/cafe-review-list","/cafe-review-detail",
//                        "/llogin","/join","/find","/").permitAll()
// //               .antMatchers("http://localhost:3000/").hasAnyAuthority("ADMIN","USER")
//                .anyRequest().authenticated()
//                .and()
//                .csrf().ignoringAntMatchers("/user/save")
//                .and()
//                .formLogin()
//                .loginPage("/llogin")
//                .loginProcessingUrl("/lloginProc")
//                .usernameParameter("username")
//                .passwordParameter("password")
//                .defaultSuccessUrl("/")
//                .permitAll()
//                .and()
//                .logout()
//                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
//                .deleteCookies("JSESSIONID")
//                .and()
//                .exceptionHandling()
//                .accessDeniedPage("/access-denied");

    }
}