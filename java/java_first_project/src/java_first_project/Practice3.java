package java_first_project;

import java.util.Scanner;

public class Practice3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);

        System.out.print("�̸��� �Է��ϼ���: ");
        String name = scanner.nextLine();

        if (name.equals("ȫ�浿")) {
            System.out.println("����");
        } else if (name.equals("������")) {
            System.out.println("����");
        } else {
            System.out.println("�𸣰ھ��.");
        }

        scanner.close();
	}

}
