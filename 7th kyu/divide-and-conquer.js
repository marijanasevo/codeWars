// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(X) {
  return X.reduce((acc, num) =>
    acc += (typeof num == 'number') ? num : -num
  ,0)
}

divCon([9, 3, '7', '3']); // 2
divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]); // 14
divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']); // 13