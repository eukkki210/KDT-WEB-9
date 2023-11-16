package java_oop;

class Animal {
    private String species;
    private String name;
    private int age;

    public Animal(String species, String name, int age) {
        this.species = species;
        this.name = name;
        this.age = age;
    }

    public void makeSound() {
        System.out.println("동물은 소리를 낸다.");
    }

    public String getName() {
        return name;
    }

    public void eat() {
        System.out.println(name + "가 먹이를 먹습니다.");
    }
    
    public void getInfo() {
    	System.out.println("이름은 " + name + ", 종류는 " + species + ", 나이는 " + age + "살");
    }
}

class Cat extends Animal {
    private String furColor;

    public Cat(String name, int age, String furColor) {
        super("고양이", name, age);
        this.furColor = furColor;
    }

    @Override
    public void makeSound() {
        System.out.println(getName() + "는 삐약삐약 소리를 낸다.");
    }

    public void purr() {
        System.out.println(getName() + "가 껁끻껁끻 소리를 내며 꼬리를 흔듭니다.");
    }
    
    public void getColor() {
    	System.out.println(getName() + "는 " + furColor);
    }
}

class Dog extends Animal {
    private String breed;

    public Dog(String name, int age, String breed) {
        super("강아지", name, age);
        this.breed = breed;
    }

    @Override
    public void makeSound() {
        System.out.println(getName() + "는 음메음메 소리를 낸다.");
    }

    public void fetch() {
        System.out.println(getName() + "가 공을 물어다 주세요! 라는 목소리로 기다립니다.");
    }
    
    public void getBreed() {
    	System.out.println(getName() + "는 " + breed);
    }
}

public class AnimalTest {
    public static void main(String[] args) {
        Cat cat = new Cat("키티", 3, "검은색");
        Dog dog = new Dog("봄이", 14, "요크셔 테리어");

        cat.getInfo();
        cat.getColor();
        cat.makeSound();
        cat.eat();

        dog.getInfo();
        dog.getBreed();
        dog.makeSound();
        dog.eat();
    }
}
