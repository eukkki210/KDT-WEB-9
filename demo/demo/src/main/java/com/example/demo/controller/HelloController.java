package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;
import java.util.List;

@Controller
public class HelloController {

    @GetMapping("/hi")
    public String getHi(Model model) { // Model model: 컨트롤러 클래스 안의 메서드가 파라미터로 받을 수 있는 객체
        Hello hello = new Hello(25);
        List<String> names = Arrays.asList("kim", "lee", "hong", "park");
        model.addAttribute("msg", "hi~~~");
        model.addAttribute("hello", "Spring World");
        model.addAttribute("uText", "<strong>Hello</strong>");
        model.addAttribute("value", "이름을 입력하세요");
        model.addAttribute("temp", "hello");
        model.addAttribute("link","hi");
        model.addAttribute("img", "000_0011.jpg");
        model.addAttribute("userRole", "admin");
        model.addAttribute("isAdmin", false);
        model.addAttribute("names", names);
        model.addAttribute("classHello", hello);

        // ${...}: 변수 표현식 ${msg}
        // @{...}: URL 링크 표현식 @{/hi}
        // *{...}: 선택 변수 표현식 *{msg} 단, th:object
        // 컨트롤러 클래스에서 private String msg = "hi";
        // model.addAttribute("Msg", new HelloController());
        // 템플릿에서 <div th:object=${Msg}><h1 th:text=*{msg}></h1></div>
        return "hi";
    }
}
