package java_first_project;

import java.util.Scanner;

public class Condition {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
//		System.out.print("���� �Է��ϼ���: ");
		
//		int num = scan.nextInt();
		// if-else��
//		if (num % 3 == 0) {
//			System.out.println("3�� ����Դϴ�: ");			
//		} else {
//			System.out.println("3�� ����� �ƴմϴ�");
//		}
//		
		// switch ��
//		switch (num % 3) {
//		case 0:
//			System.out.println("3�� ����Դϴ�: ");
//			break;
//
//		default:
//			System.out.println("3�� ����� �ƴմϴ�");
//		}
		
		// ���ڿ� ��
		// �ڹٿ��� ���ڿ��� String �ڷ��� (���۷��� �ڷ���)�̹Ƿ�, ������ ������ �� 
		// �ִ� ���� ���ڿ��� ����� �޸� �ּҰ��ʴϴ�. �ٶ� == �����ڷδ� �񱳰� �Ұ���
		// ����.equals("���ڿ�") ���·� ���ؾ���
		System.out.println("�̸��� �Է��ϼ���: ");
		
		String name = scan.nextLine();
		
		if (name.equals("�ڵ���")) {
			System.out.println("�ڵ��´� ȯ���մϴ�!!!");		
		} else {
			System.out.printf("%s�� ȯ���մϴ�", name).println();
		}
		
		scan.close();
	}

}
