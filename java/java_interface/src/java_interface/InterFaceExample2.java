package java_interface;

interface Move {
	void moveForward();
	void moveBackward();
}

interface Power {
	void PowerOn();
	void PowerOff();
}

// 인터페이스는 인터페이스를 상속 받을 수 있음
interface Car extends Move, Power {
	void changeGear(int gear);
}

class Suv implements Car {

	@Override
	public void moveForward() {
		// TODO Auto-generated method stub
		System.out.println("전진");
	}

	@Override
	public void moveBackward() {
		// TODO Auto-generated method stub
		System.out.println("후진");
	}

	@Override
	public void PowerOn() {
		// TODO Auto-generated method stub
		System.out.println("시동 ON");
	}

	@Override
	public void PowerOff() {
		// TODO Auto-generated method stub
		System.out.println("시동 OFF");
	}

	@Override
	public void changeGear(int gear) {
		// TODO Auto-generated method stub
		System.out.println("기어 변경 : " + gear);
	}
	
}

public class InterFaceExample2 {

	public static void main(String[] args) {
		Suv mySuv = new Suv();
		mySuv.PowerOn();
		mySuv.PowerOff();
		mySuv.changeGear(5);
		mySuv.moveForward();

	}

}
