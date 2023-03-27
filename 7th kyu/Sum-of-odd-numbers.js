// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input -> Output)

// 1 -> 1
// 2 -> 3 + 5 = 8                 2 + 3 = 5
// 3 -> 7 + 9 + 11 = 27           4 + 5 + 6 = 15
// 4 -> 13 + 15 + 17 + 19 = 64    7 + 8 + 9 + 10 = 34

function rowSumOddNumbers(n) {
  if (n === 1) return 1;

  let res = [];
  let currNum = 1;

  for (let i = 1; i <= n; i++) {
    let loop = i;

    while (loop--) {
      if (i === n) res.push(currNum);
      currNum += 2;
    }
  }

  return res.reduce((sum, currNumber) => sum + currNumber, 0);
}

// or

// function rowSumOddNumbers(n) {
//   return Math.pow(n, 3);
// }

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 8
rowSumOddNumbers(42); // 74088