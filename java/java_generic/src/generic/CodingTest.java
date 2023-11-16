package generic;

public class CodingTest {

	public static void main(String[] args) {
		int[] nums1 = {2, 5, 8, 3, 7};
		System.out.println(sumLessThan(nums1, 5));
	}

	public static int sumLessThan(int[] nums, int target) {
		int sum = 0;
		for (int num : nums) {
			if (num < target) {
				sum += num;
			}
		}
		return sum;
	}

}
