package java_first_project;

public class Practice9 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] arr = {15,894,23,564};

        for (int i = 0; i <= 5; i++) {
            try {
                System.out.println(arr[i]);
            } catch (ArrayIndexOutOfBoundsException e) {
                System.out.println("ÀÎµ¦½º°¡ ¹üÀ§¸¦ ¹þ¾î³µ½À´Ï´Ù.");
            }
        }
	}

}
