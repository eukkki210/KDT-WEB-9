package java_first_project;

public class Arr2Ex {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 이차원 배열로 4년 펴점 구하기 (1~4학년까지)
		double[][] score = {{3.5, 3.9}, {3.7, 3.8}, {3.8, 4.0}, {4.1, 3.7}};
		
		double sum = 0;
		for (int i = 0; i < score.length; i++) {	// 학년별
			for (int j = 0; j < score[i].length; j++) {	// 학년의 학기별
				sum += score[i][j];	// 전체 평점 합
			}
		}
		int n = score.length;	// 4
		int m = score[0].length;	// 2
		System.out.println(sum/(n*m));
	}

}
