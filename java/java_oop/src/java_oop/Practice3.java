package java_oop;

abstract class Students {
    String name;
    String school;
    int age;
    String StudentsID;

    public Students(String name, String school, int age, String StudentsID) {
        this.name = name;
        this.school = school;
        this.age = age;
        this.StudentsID = StudentsID;
    }

    public abstract void todo();
}

class Kim extends Students {
    public Kim(String name, String school, int age, String StudentsID) {
        super(name, school, age, StudentsID);
    }

    @Override
    public void todo() {
        System.out.println("점심은 김가네 김밥");
    }
}

class Baek extends Students {
    public Baek(String name, String school, int age, String StudentsID) {
        super(name, school, age, StudentsID);
    }

    @Override
    public void todo() {
        System.out.println("점심은 백종원 피자");
    }
}


public class Practice3 {
    public static void main(String[] args) {
        Students kimStudent = new Kim("김민재", "연세대학교", 26, "12345");
        Students baekStudent = new Baek("백지성", "고려대학교", 42, "67890");
        kimStudent.todo();
        baekStudent.todo();
    }
}

