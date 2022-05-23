function plusMinus(arr) {
  // Write your code here
  if (!arr || arr.length === 0) {
    return;
  }

  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  const positiveRation = (positive / arr.length).toFixed(6);
  const negativeRation = (negative / arr.length).toFixed(6);
  const zeroRation = (zero / arr.length).toFixed(6);
  console.log(positiveRation);
  console.log(negativeRation);
  console.log(zeroRation);
}

plusMinus([1, 1, 0, -1, -1]);
plusMinus([-4, 3, -9, 0, 4, 1]);
