package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

@Controller
public class PeopleController {

    @GetMapping("/people")
    public String displayPeople(Model model) {
        ArrayList<Person> peopleList = new ArrayList<>();;
        peopleList.add(new Person("kim", 10));
        peopleList.add(new Person("lee", 20));
        peopleList.add(new Person("hong", 30));
        peopleList.add(new Person("park", 40));
        peopleList.add(new Person("shin", 50));

        model.addAttribute("people", peopleList);

        return "peopleList";
    }
}
