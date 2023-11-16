package java_first_project;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Practice10 {
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
        
        try {
            System.out.print("�迭 ũ�⸦ �Է��ϼ���: ");
            int size = scanner.nextInt();
            
            if (size <= 0) {
                System.out.println("�迭 ũ��� ������� �մϴ�.");
                return;
            }
            
            int[] arr = new int[size];
            
            for (int i = 0; i < size; i++) {
                System.out.print("��� " + (i + 1) + " ���� �Է��ϼ���: ");
                arr[i] = scanner.nextInt();
            }
            
            int sum = 0;
            for (int num : arr) {
                sum += num;
            }
            double average = (double) sum / size;
            
            System.out.println("���: " + average);
        } catch (InputMismatchException e) {
            System.out.println("�߸��� �Է� �����Դϴ�. ������ �Է��ϼ���.");
        } catch (ArithmeticException e) {
            System.out.println("�迭 ũ��� 0���� Ŀ�� �մϴ�.");
        } finally {
            scanner.close();
        }
		
	}

}
