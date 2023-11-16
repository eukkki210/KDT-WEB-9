package generic;

public class CodingTest2 {
    public static int[] findIndices(int[] nums, int target) {
        int[] result = new int[2];
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    result[0] = i;
                    result[1] = j;
                    return result;
                }
            }
        }
        return new int[0];
    }

    public static void main(String[] args) {
        int[] nums2 = {3, 2, 4, 7, 6, 8, 5};
        int target2 = 9;
        int[] result2 = findIndices(nums2, target2);
        System.out.println("[" + result2[0] + ", " + result2[1] + "]");
    }
}

