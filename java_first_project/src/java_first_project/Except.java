package java_first_project;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Except {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 0���� ���� ���
//		try {
//			int num1 = 4;
//			int num2 = 0;
//			
//			System.out.println(num1 + " / " + num2 + " = " + (num1/num2));
//		} catch (ArithmeticException e) {
//			System.out.println("0���� ������ ���ܰ� �߻��Ͽ����ϴ�");
//			System.out.println(e);
//		}
//		System.out.println("������� ������");

		// �ε��� ������ ����� ��
//		int[] intArray = {1,2,3,4};
//		try {
//			for (int i = 0; i < 5; i++) {
//				System.out.println(intArray[i]);
//			}
//		} catch (ArrayIndexOutOfBoundsException e) {
//			System.out.println("�ε��� ������ ������ϴ�");
//		}
		
		// �Է� ���� �߻� ��
		Scanner scan = new Scanner(System.in);
		System.out.println("������ �Է��ϼ���");
		try {
			int num = scan.nextInt();
		} catch (InputMismatchException e) {
			System.out.println("�Է� ����. ������ �Է��ϼ���");
			System.out.println(e);
		}
		
		// ���� ��ȯ ����
		// NumberFormatException
		// ��ü ������ null�� ���¿��� ��ü�� �޼ҵ峪 �Ӽ��� ������ ��
		// NullPointerException
		
		// ������ �������� ���� ��(�����Ϸ��� ���� üũ��)
		// FileNotFoundException
		
		scan.close();
	}

}
