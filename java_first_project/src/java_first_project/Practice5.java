package java_first_project;

import java.util.Scanner;

public class Practice5 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);

        System.out.print("ù ��° ���ڸ� �Է��ϼ���: ");
        double num1 = scanner.nextDouble();

        System.out.print("�� ��° ���ڸ� �Է��ϼ���: ");
        double num2 = scanner.nextDouble();

        methodPractice(num1, num2);

        scanner.close();
	}

	public static void methodPractice(double a, double b) {
        System.out.println("���� ���: " + (a + b));
        System.out.println("���� ���: " + (a - b));
        System.out.println("���� ���: " + (a * b));
        
        if (b != 0) {
            System.out.println("������ ���: " + (a / b));
        } else {
            System.out.println("�������� ������ �� �����ϴ� (0���� ���� �� ����).");
        }
    }
}
