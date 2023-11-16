package java_first_project;

import java.util.Scanner;

public class Practice5 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);

        System.out.print("첫 번째 숫자를 입력하세요: ");
        double num1 = scanner.nextDouble();

        System.out.print("두 번째 숫자를 입력하세요: ");
        double num2 = scanner.nextDouble();

        methodPractice(num1, num2);

        scanner.close();
	}

	public static void methodPractice(double a, double b) {
        System.out.println("덧셈 결과: " + (a + b));
        System.out.println("뺄셈 결과: " + (a - b));
        System.out.println("곱셈 결과: " + (a * b));
        
        if (b != 0) {
            System.out.println("나눗셈 결과: " + (a / b));
        } else {
            System.out.println("나눗셈을 수행할 수 없습니다 (0으로 나눌 수 없음).");
        }
    }
}
