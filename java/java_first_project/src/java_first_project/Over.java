package java_first_project;

public class Over {
	
	// �ڹٽ�ũ��Ʈ
	// function a( a, b, c = 0 ) {}
	// a(1, 2)
	
	// �ޤǵ� �����ε�
	// ���� �� ���� ���ϴ� �޼ҵ�
	public int add(int a, int b) {
		return a + b; 
	}
	// ���� �� ���� ���ϴ� �޼ҵ�
	public double add(double a, double b) {
		return a + b;
	}
	// ���� �� ���� ���ϴ� �޼ҵ�
	public int add(int a, int b, int c) {
		return a + b + c;
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Over calc = new Over();
		
		System.out.println(calc.add(10, 20));
		System.out.println(calc.add(0.15, 0.3));
		System.out.println(calc.add(10, 100, 1000));
	}

}
