package java_oop;

public class Student extends Person {
	
	private String major;
	
	public Student(String name, int age, String major) {
		//super(): ����Ŭ�������� ����Ŭ���� �����ڸ� ȣ���ϴµ� ���
		//super Ű����� ���� Ŭ�������� �������̵�� �޼��带 ȣ���ϴµ� ���
		super(name, age);
		setAge(age);
		this.major = major;
	}
	
	@Override
    public String toString() {
        return "Student / super: " + super.toString() + ", major" + major; 
    }

}