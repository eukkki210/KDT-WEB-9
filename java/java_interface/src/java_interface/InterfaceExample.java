package java_interface;

interface Controller {
	void powerOn();
	void powerOff();
	void display();
}

class TV implements Controller {

	@Override
	public void powerOn() {
		// TODO Auto-generated method stub
		System.out.println("TV power ON");
	}

	@Override
	public void powerOff() {
		// TODO Auto-generated method stub
		System.out.println("TV power OFF");

	}

	@Override
	public void display() {
		// TODO Auto-generated method stub
		System.out.println("디스플레이가 켜졌습니다");
	}
	
}

class Computer implements Controller {

	@Override
	public void powerOn() {
		// TODO Auto-generated method stub
		System.out.println("Computer power ON");

	}

	@Override
	public void powerOff() {
		// TODO Auto-generated method stub
		System.out.println("Computer power OFF");

	}
	
}

public class InterfaceExample {

	public static void main(String[] args) {
		TV tv = new TV();
		Computer computer = new Computer();
		
		tv.powerOn();
		tv.display();
		tv.powerOff();
		computer.powerOn();
		computer.powerOff();
	}

}
