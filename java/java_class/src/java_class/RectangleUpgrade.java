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
            System.out.println("�簢���� ���ο� ���� ���̸� ���⸦ �������� �Է����ּ���.");
            double userWidth = scanner.nextDouble();

            if (userWidth == 0) {
                break;
            }

            RectangleUpgrade newRectangleUpgrade = new RectangleUpgrade(userWidth);

            double userHeight = scanner.nextDouble();
            newRectangleUpgrade.setHeight(userHeight);

            RectangleUpgrades.add(newRectangleUpgrade);
        }

        System.out.println("�Է��� �簢�� ����:");
        for (RectangleUpgrade RectangleUpgrade : RectangleUpgrades) {
            System.out.println("���� ���̴�: " + RectangleUpgrade.getWidth());
            System.out.println("���� ���̴�: " + RectangleUpgrade.height);
            System.out.println("���̴�: " + RectangleUpgrade.area());
            System.out.println("------------------------");
        }
    }
}
