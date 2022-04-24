// loop solution
// O(n)
export function removeDuplicates(nums: number[]): number[] {
  let numsCopy: (number | any)[] = [...nums];
  if (numsCopy.length === 0) {
    return [];
  }

  let dictionary: Record<number, any> = {
    [nums[0]]: nums[0],
  };
  let freeIndex: number[] = [];
  let counter = 1;

  for (let i = 1; i < numsCopy.length; i++) {
    if (dictionary[numsCopy[i]] === numsCopy[i]) {
      numsCopy[i] = "_";
      freeIndex.push(i);
    } else {
      dictionary[numsCopy[i]] = numsCopy[i];
      counter = counter + 1;
      if (freeIndex.length > 0 && freeIndex[0] < i) {
        numsCopy[freeIndex[0]] = numsCopy[i];
        freeIndex = freeIndex.slice(1);
        freeIndex.push(i);
        numsCopy[i] = "_";
      }
    }
  }

  return numsCopy.slice(0, counter);
}
