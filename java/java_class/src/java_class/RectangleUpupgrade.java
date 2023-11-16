package java_class;

import java.util.ArrayList;
import java.util.Scanner;

public class RectangleUpupgrade {
    private double width;
    private double height;
    private static int numberOfRectangles = 0;

    public RectangleUpupgrade(double width) {
        this.width = width;
        this.height = 0;
        numberOfRectangles++;
    }

    public double getWidth() {
        return width;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public double area() {
        return width * height;
    }

    public static int getNumberOfRectangles() {
        return numberOfRectangles;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<RectangleUpupgrade> RectangleUpupgrades = new ArrayList<>();

        while (true) {
            System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
            double userWidth = scanner.nextDouble();

            if (userWidth == 0) {
                break;
            }

            RectangleUpupgrade newRectangleUpupgrade = new RectangleUpupgrade(userWidth);

            double userHeight = scanner.nextDouble();
            newRectangleUpupgrade.setHeight(userHeight);

            RectangleUpupgrades.add(newRectangleUpupgrade);
        }

        System.out.println("입력한 사각형 정보:");
        for (RectangleUpupgrade RectangleUpupgrade : RectangleUpupgrades) {
            System.out.println("가로 길이는: " + RectangleUpupgrade.getWidth());
            System.out.println("세로 길이는: " + RectangleUpupgrade.height);
            System.out.println("넓이는: " + RectangleUpupgrade.area());
            System.out.println("------------------------");
        }

        System.out.println("Rectangle 인스턴스의 개수는: " + RectangleUpupgrade.getNumberOfRectangles());
    }
}
