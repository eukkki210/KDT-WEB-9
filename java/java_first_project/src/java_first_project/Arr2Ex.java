package java_first_project;

public class Arr2Ex {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// ������ �迭�� 4�� ���� ���ϱ� (1~4�г����)
		double[][] score = {{3.5, 3.9}, {3.7, 3.8}, {3.8, 4.0}, {4.1, 3.7}};
		
		double sum = 0;
		for (int i = 0; i < score.length; i++) {	// �г⺰
			for (int j = 0; j < score[i].length; j++) {	// �г��� �б⺰
				sum += score[i][j];	// ��ü ���� ��
			}
		}
		int n = score.length;	// 4
		int m = score[0].length;	// 2
		System.out.println(sum/(n*m));
	}

}
