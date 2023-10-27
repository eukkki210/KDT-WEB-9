package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AgeController {

    @GetMapping("/checkAge")
    public String checkAge(@RequestParam int age, Model model) {
        model.addAttribute("age", age);
        return "ageCheck";
    }
}