package java_first_project;

import java.util.ArrayList;
import java.util.Scanner;

public class Practice8 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<String> stringList = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("���ڿ��� �Է����ּ���.	:");
            String input = scanner.nextLine();

            if (input.equalsIgnoreCase("exit")) {
                break;
            } else {
                stringList.add(input);
            }
        }

        for (String value : stringList) {
            System.out.println(value);
        }

        scanner.close();

	}

}
