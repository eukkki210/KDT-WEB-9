package com.example.KDT9Example.game;

import org.springframework.stereotype.Component;

@Component
public class LoLGame implements GameConsole {
    public void up() {
        System.out.println("LoL up");
    }

    public void down() {
        System.out.println("LoL back");
    }

    public void right() {
        System.out.println("LoL right");
    }

    public void left() {
        System.out.println("LoL left");
    }
}
