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

        System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력햊세요.");

        int userWidth = scanner.nextInt();
        int userHeight = scanner.nextInt();

        Rectangle myRectangle = new Rectangle(userWidth, userHeight);

        System.out.println("사각형의 넓이: " + myRectangle.area());
    }

}
