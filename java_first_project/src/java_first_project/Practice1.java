package java_first_project;

import java.util.Scanner;

public class Practice1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("�̸��� �Է��ϼ���");
		
		String name = scanner.next();
		
		System.out.println("���̸� �Է��ϼ���");

		int age = scanner.nextInt();
		
		System.out.println("�ȳ��ϼ���! " + name + "�� (" + age + "��)");
	}

}
