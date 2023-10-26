package java_first_project;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Practice10 {
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
        
        try {
            System.out.print("배열 크기를 입력하세요: ");
            int size = scanner.nextInt();
            
            if (size <= 0) {
                System.out.println("배열 크기는 양수여야 합니다.");
                return;
            }
            
            int[] arr = new int[size];
            
            for (int i = 0; i < size; i++) {
                System.out.print("요소 " + (i + 1) + " 값을 입력하세요: ");
                arr[i] = scanner.nextInt();
            }
            
            int sum = 0;
            for (int num : arr) {
                sum += num;
            }
            double average = (double) sum / size;
            
            System.out.println("평균: " + average);
        } catch (InputMismatchException e) {
            System.out.println("잘못된 입력 형식입니다. 정수를 입력하세요.");
        } catch (ArithmeticException e) {
            System.out.println("배열 크기는 0보다 커야 합니다.");
        } finally {
            scanner.close();
        }
		
	}

}
