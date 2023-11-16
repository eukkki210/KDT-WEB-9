package java_class;

import java.util.Scanner;

public class Rectangle {
	private int width;
    private int height;

    public Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
    }

    public int area() {
        return width * height;
    }

    public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

        System.out.println("�簢���� ���ο� ���� ���̸� ���⸦ �������� �Է��Y����.");

        int userWidth = scanner.nextInt();
        int userHeight = scanner.nextInt();

        Rectangle myRectangle = new Rectangle(userWidth, userHeight);

        System.out.println("�簢���� ����: " + myRectangle.area());
    }

}
