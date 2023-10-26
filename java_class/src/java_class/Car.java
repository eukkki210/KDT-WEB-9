package java_class;

public class Car {
	
	//����������
	//public: ����Ŭ����o, ������Ű��o, �ڽ�Ŭ����o, ��üo
	//protected: ����Ŭ����o, ������Ű��o, �ڽ�Ŭ����o
	//default: ����Ŭ����o, ������Ű��o
	//private: ����Ŭ����o
	
	//��� ����
	private int speed;
	
	//������
	//Ŭ������� �����ؾ���
	public Car(int speed) {
		this.speed = speed;
	}
	
	public void start() {
		System.out.println("Car Start");
		System.out.println(speed);
	}

	public void increseSpeed(int speed) {
		this.speed = this.speed + speed;
	}
	
	public int getSpeed() {
		return speed;
	}

	public void setSpeed(int speed) {
		//��ȿ�� �˻�
		if( speed > 0) {
			this.speed = speed;
		}
	}
		
//	//setter�޼ҵ�
//	public void setSpeed(int speed) {
//		this.speed = speed;
//	}
//	//getter�޼ҵ�
//	public int getSpeed() {
//		return this.speed;
//	}

}