function removeDuplicatesA(nums) {
  let numsCopy = [...nums];
  if (numsCopy.length === 0) {
    return 0;
  }

  let dictionary = {
    [nums[0]]: nums[0],
  };
  let freeIndex = [];
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

  return counter;
}

function removeDuplicatesB(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}

module.exports = { removeDuplicatesA, removeDuplicatesB };
