package java_first_project;

import java.util.Scanner;

public class Practice2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);

        System.out.print("���̸� �Է��ϼ���: ");
        int age = scanner.nextInt();

        if (age >= 1 && age <= 7) {
            System.out.println("����");
        } else if (age >= 8 && age <= 13) {
            System.out.println("�ʵ��л�");
        } else if (age >= 14 && age <= 16) {
            System.out.println("���л�");
        } else if (age >= 17 && age <= 19) {
            System.out.println("����л�");
        } else {
            System.out.println("����");
        }
        
        scanner.close();
	}

}
