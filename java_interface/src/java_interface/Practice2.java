package java_interface;

abstract class Vehicle {
    private String name;
    private int maxSpeed;

    public Vehicle(String name, int maxSpeed) {
        this.name = name;
        this.maxSpeed = maxSpeed;
    }

    public String getName() {
        return name;
    }

    public int getMaxSpeed() {
        return maxSpeed;
    }

    public abstract void move();
}

interface Flyability {
    void fly();
}

class Automobile extends Vehicle {
    public Automobile(String name, int maxSpeed) {
        super(name, maxSpeed);
    }

    @Override
    public void move() {
        System.out.println(getName() + "는 도로를 따라 이동 중");
    }
}

class Aircraft extends Vehicle implements Flyability {
    public Aircraft(String name, int maxSpeed) {
        super(name, maxSpeed);
    }

    @Override
    public void move() {
        System.out.println(getName() + "는 하늘을 날아가는 중");
    }

    @Override
    public void fly() {
        System.out.println("고도 10,000피트에서 비행 중");
    }
}

public class Practice2 {
    public static void main(String[] args) {
        Vehicle[] vehicles = new Vehicle[2];
        vehicles[0] = new Automobile("승용차", 120);
        vehicles[1] = new Aircraft("비행기", 600);

        for (Vehicle vehicle : vehicles) {
            vehicle.move();
            if (vehicle instanceof Flyability) {
                ((Flyability) vehicle).fly();
            }
            System.out.println();
        }
    }
}
