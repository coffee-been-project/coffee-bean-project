package com.example.swproject.Test;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
public class UploadController {

    @RequestMapping(value = "/upload",method = RequestMethod.POST)
    public String upload(@RequestParam MultipartFile[] uploadfile, Model model) throws IllegalStateException, IOException{

        List<FileDTO> list = new ArrayList<>();
        for(MultipartFile file : uploadfile){
            if(!file.isEmpty()){
                //UUID를 이용해 unique한 파일 이름을 만들어 줌.
                FileDTO dto = new FileDTO(UUID.randomUUID().toString(),
                                            file.getOriginalFilename(),
                                            file.getContentType());
                list.add(dto);

                File newFileName = new File(dto.getUuid()+"_"+dto.getFileName());
                file.transferTo(newFileName);
            }
        }

        model.addAttribute("files",list);
        return "result";
    }
}
