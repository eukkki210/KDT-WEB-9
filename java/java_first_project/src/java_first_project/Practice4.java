package java_first_project;

import java.util.Scanner;

public class Practice4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);

        System.out.print("���ڸ� �Է��ϼ���: ");
        int number = scanner.nextInt();

        for (int i = 1; i <= number; i++) {
            System.out.println(i);
        }

        scanner.close();
	}

}
