package java_first_project;

import java.util.Scanner;

public class Practice7 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);

        int[] numbers = new int[5];

        System.out.println("5개의 정수를 입력하세요:");

        for (int i = 0; i < 5; i++) {
            numbers[i] = scanner.nextInt();
        }

        int sum = 0;
        for (int i = 0; i < 5; i++) {
            sum += numbers[i];
        }
        double average = (double) sum / 5;

        System.out.println("평균은 " + average);

        scanner.close();
	}

}
