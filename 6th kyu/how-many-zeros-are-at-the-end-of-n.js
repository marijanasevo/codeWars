// Define n!! as
// n!! = 1 * 3 * 5 * ... * n if n is odd,
// n!! = 2 * 4 * 6 * ... * n if n is even.
// Hence 8!! = 2 * 4 * 6 * 8 = 384, there is no zero at the end. 30!! has 3 zeros at the end.
// For a positive integer n, please count how many zeros are there at the end of n!!.

// Example:
// 30!! = 2 * 4 * 6 * 8 * 10 * ... * 22 * 24 * 26 * 28 * 30 
// 30!! = 42849873690624000 (3 zeros at the end)

function countZeros(n) {
  n = BigInt(n);
  let i, res = i = ((n % 2n) ? 1n : 2n);

  for (i += 2n; i <= n; i += 2n) {
    res *= i;
  }

  res = res.toString();
  const count = (res.match(/0+$/)?.[0]?.length || 0);
  return count;
}

countZeros(8); // 0
countZeros(14); // 1
countZeros(30); // 3 
countZeros(370); // 45