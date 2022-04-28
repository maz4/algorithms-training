function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return;
  }

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  const result = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let counterA1 = 1;
  let counterA2 = 1;

  while (arr1Item || arr2Item) {
    if (!arr2Item || !arr1Item || arr1Item < arr2Item) {
      result.push(arr1Item);
      arr1Item = arr1[counterA1];
      counterA1++;
    } else {
      result.push(arr2Item);
      arr2Item = arr2[counterA2];
      counterA2++;
    }
  }

  return result;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); //
