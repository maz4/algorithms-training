export function twoSum(nums: number[], target: number): number[] {
  // Time Complexity: O(n^2)
  // Space Complexity: O(1)
  const numbersLength = nums.length;
  if (numbersLength < 2) {
    return [];
  }

  for (let i = 0; i < numbersLength; i++) {
    for (let j = 0; j < numbersLength; j++) {
      if (i === j) {
        continue;
      }

      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

export function twoSumHashMap(nums: number[], target: number): number[] {
  // Time Complexity: O(n)
  // Space Complexity: O(n)
  const seen: Record<number, number> = {};
  const numbersLength = nums.length;
  if (numbersLength < 2) {
    return [];
  }

  for (let i = 0; i < numbersLength; i++) {
    let remaing = target - nums[i];
    if (seen.hasOwnProperty(remaing.toString())) {
      return [seen[remaing], i];
    }
    seen[nums[i]] = i;
  }
  return [];
}
