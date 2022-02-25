package com.example.swproject.controller.cafelist;
import com.example.swproject.dto.cafelist.CafeListDTO;
import com.example.swproject.service.cafelist.CafeListService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

import java.util.List;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequiredArgsConstructor
public class CafeListController {

    private final CafeListService cafeListService;

    @GetMapping( "/cafe_list")
    public List<CafeListDTO> getCafeList(HttpServletRequest request){
        String bean = request.getParameter("bean");
        String method = request.getParameter("method");


        return cafeListService.getCafeList(bean, method);
    }

}