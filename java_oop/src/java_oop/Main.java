package java_oop;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Person(슈퍼클래스) 인스턴스생성
		Person person = new Person("홍길동", 30);
		System.out.println(person.toString());
		System.out.println(person.toString(3));
		
		//Student(하위클래스) 인스턴스생성
		Student student = new Student("이몽룡", 32, "컴퓨터공학");
		System.out.println(student.toString());
		//하위클래스에 부모 클래스의 메서드 사용
		System.out.println(student.getName());
		System.out.println(student.getAge());

	}

}