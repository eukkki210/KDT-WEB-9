package java_first_project;
import java.util.Scanner;

public class Scan {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("�̸�, ����, Ű, ��ȥ ���θ� ��ĭ���� �и��Ͽ� �Է��ϼ���");
		
		// System.in: ǥ�� �Է� ��Ʈ���� ��Ÿ����, �ַ� Ű���� �Է��� ���� ���
		Scanner scanner = new Scanner(System.in);
		
		String name = scanner.next();	// ���� ���������� ���ڿ� �б�
		int age = scanner.nextInt();	// ���� �б�
		double height = scanner.nextDouble();	// �Ǽ� �б�
		boolean single = scanner.nextBoolean();	// ���� �б�
		
		System.out.print("�̸���" + name + ", ");
		System.out.print("���̴� " + age + "��, ");
		System.out.print("Ű�� " + height + "cm, ");
		System.out.println("��ȥ ���δ�" + single + "�Դϴ�.");
		
		
		scanner.close();
	}

}
