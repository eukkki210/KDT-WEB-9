package generic;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Practice2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Map<String, Integer> nameAgeMap = new HashMap<>();

        while (true) {
            System.out.print("이름 입력: ");
            String name = scanner.nextLine();

            if (name.equals("종료")) {
                break;
            }

            System.out.print("나이 입력: ");
            int age = scanner.nextInt();
            scanner.nextLine();

            nameAgeMap.put(name, age);
        }

        System.out.println("입력한 이름과 나이:");
        for (Map.Entry<String, Integer> entry : nameAgeMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue() + "세");
        }

        scanner.close();
    }
}
