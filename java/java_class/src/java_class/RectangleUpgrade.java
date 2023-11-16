package java_class;

import java.util.ArrayList;
import java.util.Scanner;

public class RectangleUpgrade {
    private double width;
    private double height;

    public RectangleUpgrade(double width) {
        this.width = width;
        this.height = 0;
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

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<RectangleUpgrade> RectangleUpgrades = new ArrayList<>();

        while (true) {
            System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
            double userWidth = scanner.nextDouble();

            if (userWidth == 0) {
                break;
            }

            RectangleUpgrade newRectangleUpgrade = new RectangleUpgrade(userWidth);

            double userHeight = scanner.nextDouble();
            newRectangleUpgrade.setHeight(userHeight);

            RectangleUpgrades.add(newRectangleUpgrade);
        }

        System.out.println("입력한 사각형 정보:");
        for (RectangleUpgrade RectangleUpgrade : RectangleUpgrades) {
            System.out.println("가로 길이는: " + RectangleUpgrade.getWidth());
            System.out.println("세로 길이는: " + RectangleUpgrade.height);
            System.out.println("넓이는: " + RectangleUpgrade.area());
            System.out.println("------------------------");
        }
    }
}
