package java_oop;

class Vehicle {
    private String type;
    private String brand;
    private int maxSpeed;

    public Vehicle(String type, String brand, int maxSpeed) {
        this.type = type;
        this.brand = brand;
        this.maxSpeed = maxSpeed;
    }

    public void start() {
        System.out.println(brand + " " + type + "가 출발합니다.");
    }

    public void stop() {
        System.out.println(brand + " " + type + "가 정지합니다.");
    }

    public void accelerate() {
        System.out.println(brand + " " + type + "가 가속합니다.");
    }

    public void brake() {
        System.out.println(brand + " " + type + "가 브레이크를 밟습니다.");
    }

    public void honk() {
        System.out.println(brand + " " + type + "가 경적을 울립니다.");
    }
}

class Bus extends Vehicle {
    public Bus(String brand, int maxSpeed) {
        super("버스", brand, maxSpeed);
    }

    public void openDoor() {
        System.out.println("버스의 문을 엽니다.");
    }
}

class Car extends Vehicle {
    public Car(String brand, int maxSpeed) {
        super("승용차", brand, maxSpeed);
    }

    public void autoPark() {
        System.out.println("승용차가 자동 주차를 시작합니다.");
    }
}

class MotorCycle extends Vehicle {
    public MotorCycle(String brand, int maxSpeed) {
        super("오토바이", brand, maxSpeed);
    }

    public void deliver() {
        System.out.println("오토바이가 배달을 합니다.");
    }
}

class Truck extends Vehicle {
    public Truck(String brand, int maxSpeed) {
        super("트럭", brand, maxSpeed);
    }

    public void transportCargo() {
        System.out.println("트럭이 화물을 운반합니다.");
    }
}

// 다른 차량 클래스들도 유사하게 작성

public class VehicleTest {
    public static void main(String[] args) {
        Bus bus = new Bus("현대", 100);
        Car car = new Car("BMW", 150);
        MotorCycle motorcycle = new MotorCycle("야마하", 200);

        Truck truck = new Truck("볼보", 80);

        bus.start();
        bus.openDoor();
        bus.stop();

        car.start();
        car.autoPark();
        car.stop();

        motorcycle.start();
        motorcycle.deliver();
        motorcycle.stop();

        truck.start();
        truck.transportCargo();
        truck.stop();
    }
}
