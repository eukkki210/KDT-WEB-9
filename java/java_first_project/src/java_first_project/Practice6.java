package java_first_project;

public class Practice6 {
	public static void main(String[] args) {
        double circleArea = calculateArea(5);
        System.out.println("�������� 5�� ���� ����: " + circleArea);

        double rectangleArea = calculateArea(4, 7);
        System.out.println("���簢���� ����: " + rectangleArea);

        double triangleArea = calculateArea(6, 3, "�ﰢ��");
        System.out.println("�ﰢ���� ����: " + triangleArea);
    }

    public static double calculateArea(double arg1) {
        return Math.PI * arg1 * arg1;
    }
    
    public static double calculateArea(double arg1, double arg2) {
    	return arg1 * arg2;
    }

    public static double calculateArea(double arg1, double arg2, String arg3) {
    	if (arg3.equals("�ﰢ��")) {
			return arg1 * arg2 * 0.5;
		} else {
			return arg1 * arg2;
		}
    }
}