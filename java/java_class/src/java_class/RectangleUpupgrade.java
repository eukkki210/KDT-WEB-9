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
            System.out.println("�簢���� ���ο� ���� ���̸� ���⸦ �������� �Է����ּ���.");
            double userWidth = scanner.nextDouble();

            if (userWidth == 0) {
                break;
            }

            RectangleUpupgrade newRectangleUpupgrade = new RectangleUpupgrade(userWidth);

            double userHeight = scanner.nextDouble();
            newRectangleUpupgrade.setHeight(userHeight);

            RectangleUpupgrades.add(newRectangleUpupgrade);
        }

        System.out.println("�Է��� �簢�� ����:");
        for (RectangleUpupgrade RectangleUpupgrade : RectangleUpupgrades) {
            System.out.println("���� ���̴�: " + RectangleUpupgrade.getWidth());
            System.out.println("���� ���̴�: " + RectangleUpupgrade.height);
            System.out.println("���̴�: " + RectangleUpupgrade.area());
            System.out.println("------------------------");
        }

        System.out.println("Rectangle �ν��Ͻ��� ������: " + RectangleUpupgrade.getNumberOfRectangles());
    }
}
