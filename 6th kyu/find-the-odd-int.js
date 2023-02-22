// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(arr) {
  const itemRepeats = {};

  arr.forEach(num => {
    (typeof itemRepeats[num] != 'number') ? itemRepeats[num] = 1 : ++itemRepeats[num];
  });

  for (let prop in itemRepeats) {
    if (itemRepeats[prop] % 2) return +prop;
  }

  // return arr.reduce((a, b) => {
  //   return a ^ b;
  // });

  // return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

findOdd([3, 1, 3, 1, 2, 3, 3, 2, 2]); // 2
findOdd([1]); // 1
findOdd([1, 2, 2]); // 0