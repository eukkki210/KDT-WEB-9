package com.example.KDT9Example.game;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class FootballManager implements GameConsole {
    public void up() {
        System.out.println("FM search players");
    }

    public void down() {
        System.out.println("FM train players");
    }

    public void right() {
        System.out.println("Fm progress match");
    }

    public void left() {
        System.out.println("Fm set up tactic");
    }
}
