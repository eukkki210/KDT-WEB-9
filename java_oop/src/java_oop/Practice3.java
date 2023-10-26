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
        System.out.println("������ �谡�� ���");
    }
}

class Baek extends Students {
    public Baek(String name, String school, int age, String StudentsID) {
        super(name, school, age, StudentsID);
    }

    @Override
    public void todo() {
        System.out.println("������ ������ ����");
    }
}


public class Practice3 {
    public static void main(String[] args) {
        Students kimStudent = new Kim("�����", "�������б�", 26, "12345");
        Students baekStudent = new Baek("������", "������б�", 42, "67890");
        kimStudent.todo();
        baekStudent.todo();
    }
}

