// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7

function deepCount(a) {
  return a.reduce((sum, item) => {
    if (Array.isArray(item)) {
      sum += deepCount(item);
    }
    return sum += 1;
  }, 0)
}

deepCount([]); // 0
deepCount([1, 2, 3]); // 3
deepCount(["x", "y", ["z"]]); // 4
deepCount([1, 2, [3, 4, [5]]]); // 7
deepCount([[[[[[[[[]]]]]]]]]); // 8