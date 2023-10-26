package java_oop;

// 추상 클래스
abstract class Animals {
	int age;
	// 추상 메서드
	abstract public void sound();
	
	// 일반 메서드
	public void sleep() {
		System.out.println("동물이 잠을 잔다");
	}
}

// 추상 클래스 Animal을 상속받는 Chicken 클래스
class Chicken extends Animals {
	
	@Override
	public void sound() {
		System.out.println("꼬꼬댁");
	}
}

public class AbstractExample {

	public static void main(String[] args) {
		// 추상 클래스는 인스턴스호 할 수 없음
		// Animals animal = new Animals();
		
		Chicken chicken = new Chicken();
		chicken.sound();
		chicken.sleep();
	}

}
