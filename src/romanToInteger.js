function romanToInt(s) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const exceptions = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  if (s.length === 0 || s.length > 3999) {
    return 0;
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && exceptions[s[i] + s[i + 1]]) {
      result = result + exceptions[s[i] + s[i + 1]];
      i++;
    } else {
      result = result + romanNumerals[s[i]];
    }
  }

  return result;
}

function romanToIntHashMap(s) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && romanNumerals[s[i]] < romanNumerals[s[i + 1]]) {
      result = result - romanNumerals[s[i]];
    } else {
      result = result + romanNumerals[s[i]];
    }
  }
  return result;
}

module.exports = { romanToInt, romanToIntHashMap };
