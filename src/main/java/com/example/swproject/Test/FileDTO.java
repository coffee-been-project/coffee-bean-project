package com.example.swproject.Test;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class FileDTO {

    private String uuid;
    private String fileName;
    private String contentType;

    public FileDTO(){}

    public FileDTO(String uuid,String fileName,String contentType){
        this.uuid = uuid;
        this.fileName = fileName;
        this.contentType = contentType;
        System.out.println(contentType);
    }
}
