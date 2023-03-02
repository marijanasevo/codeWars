// Define n!! as
// n!! = 1 * 3 * 5 * ... * n if n is odd,
// n!! = 2 * 4 * 6 * ... * n if n is even.
// Hence 8!! = 2 * 4 * 6 * 8 = 384, there is no zero at the end. 30!! has 3 zeros at the end.
// For a positive integer n, please count how many zeros are there at the end of n!!.

// Example:
// 30!! = 2 * 4 * 6 * 8 * 10 * ... * 22 * 24 * 26 * 28 * 30 
// 30!! = 42849873690624000 (3 zeros at the end)

function countZeros(n) {
  let i;
  let res = i = ((n % 2) ? 1 : 2);
  let count = 0;

  for (i += 2; i <= n; i += 2) {
    res *= i;
  }

  while (res % 10 == 0) {
    count++;
  }

  console.log(2 * 4 * 6 * 8);
  console.log(res);
  console.log(count);
  
  return res;
}

// countZeros(8); // 0
countZeros(14); // 1
// countZeros(30); // 3 