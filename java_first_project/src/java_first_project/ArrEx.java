package java_first_project;

import java.util.Arrays;
import java.util.Scanner;

public class ArrEx {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// ��� 1. �迭 ��� ���� (for �� ����)
//		int[] intArray = {1,2,3,4,5};
//		
//		for (int i = 0; i < intArray.length; i++) {
//			System.out.println(intArray[i] + " ");
//		}
		Scanner scan = new Scanner(System.in);
		int[] intArray = new int[5];	// ũ�Ⱑ 5�� int �迭
		
		System.out.println("���� 5���� �Է��ϼ���");
		for (int i = 0; i < intArray.length; i++) {
			intArray[i] = scan.nextInt();
		}
		
		// ��� 2. Array.toString �迭�� ��Ҹ� ���ڿ��� ��ȯ
//		System.out.println(Arrays.toString(intArray));
//		System.out.println(intArray);
		
		// ��� 3. for-each�� ���
		int sum = 0;
		for (int arr : intArray) {
			System.out.println(arr + " ");
			sum += arr;
		}
		System.out.println(sum);
		
		scan.close();
	}

}
