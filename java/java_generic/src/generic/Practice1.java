package generic;

import java.util.HashSet;
import java.util.Scanner;

public class Practice1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        HashSet<Integer> uniqueIntegers = new HashSet<>();

        while (true) {
            int num = scanner.nextInt();

            if (num == -1) {
                break;
            }

            if (!uniqueIntegers.contains(num)) {
                uniqueIntegers.add(num);
            }
        }

        for (int num : uniqueIntegers) {
            System.out.println(num);
        }

        scanner.close();
    }
}
