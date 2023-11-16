package java_oop;

// �߻� Ŭ����
abstract class Animals {
	int age;
	// �߻� �޼���
	abstract public void sound();
	
	// �Ϲ� �޼���
	public void sleep() {
		System.out.println("������ ���� �ܴ�");
	}
}

// �߻� Ŭ���� Animal�� ��ӹ޴� Chicken Ŭ����
class Chicken extends Animals {
	
	@Override
	public void sound() {
		System.out.println("������");
	}
}

public class AbstractExample {

	public static void main(String[] args) {
		// �߻� Ŭ������ �ν��Ͻ�ȣ �� �� ����
		// Animals animal = new Animals();
		
		Chicken chicken = new Chicken();
		chicken.sound();
		chicken.sleep();
	}

}
