function reverse(str) {
  // time O(n)
  // memory O(n)
  if (!str || str.length < 2 || typeof str !== "string") {
    return;
  }
  let newStrArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    newStrArr.push(str[i]);
  }

  return newStrArr.join("");
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("Hi my name is Joe")); //
console.log(reverse2("Hi my name is Joe")); //
