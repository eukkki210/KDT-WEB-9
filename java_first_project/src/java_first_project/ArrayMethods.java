package java_first_project;

import java.util.Arrays;

public class ArrayMethods {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] arr = {1,2,3,4,5};

		// copyOf: Ư�� ���̸�ŭ ������ �� �迭�� ��ȯ
		int[] newArr = Arrays.copyOf(arr, 4);
		System.out.println(Arrays.toString(newArr));
		
		// copyOfRange: ���� �ε������� ���� �̵��� �������� �κ��� ������ ä �迭�� ��ȯ
		int[] newArr2 = Arrays.copyOfRange(arr, 2, 4);
		System.out.println(Arrays.toString(newArr2));
		
		// fill: �迭�� ��� ��Ҹ� �־��� ������ ä��
		Arrays.fill(arr, 10);
		System.out.println(Arrays.toString(arr));
		int[] arr2 = new int[5];
		arr2[0] = 1;
		arr2[1] = 2;
		arr2[2] = 3;
		Arrays.fill(arr2, 3, arr2.length, 100);
		System.out.println(Arrays.toString(arr2));
		
		// sort: �迭�� ������������ ����
		int[] arr3 = {3,2,4,5,1};
		Arrays.sort(arr3);
		System.out.println(Arrays.toString(arr3));
		
		// arr3 �迭 ������
		int[] reverseArr = new int[5];
		
		for (int i = arr3.length - 1, j = 0; i >= 0; i--, j++) {
		    reverseArr[j] = arr3[i];
		}

		System.out.println(Arrays.toString(reverseArr));
		
		// equals: �� �迭�� ������ ���� Ȯ��
		int[] arr4 = {1,2,3,4,5};
		System.out.println(Arrays.equals(arr3, arr4));
		
		// deepEquals: ������ �迭 ��
		int[][] arrs1 = {{1,2},{3,4}};
		int[][] arrs2 = {{1,2},{3,4}};
		System.out.println(Arrays.deepEquals(arrs1, arrs2));
		
		// binaraySearch
		int index = Arrays.binarySearch(arr3, 2);	// {1,2,3,4,5}
		System.out.println(index);
	}

}
