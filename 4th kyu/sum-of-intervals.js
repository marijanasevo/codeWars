// Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//    [1, 4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

// Examples:
// sumIntervals( [
//    [1, 2],
//    [6, 10],
//    [11, 15]
// ] ) => 9

// sumIntervals( [
//    [1, 4],
//    [7, 10],
//    [3, 5]
// ] ) => 7

// sumIntervals( [
//    [1, 5],
//    [10, 20],
//    [1, 6],
//    [16, 19],
//    [5, 11]
// ] ) => 19

// sumIntervals( [
//    [0, 20],
//    [-100000000, 10],
//    [30, 40]
// ] ) => 100000030
// Tests with large intervals
// Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000].


function sumIntervals(intervals) {
  // Merge overlapping intervals
  intervals.sort((a, b) => a[0] - b[0]);
  let mergedIntervals = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let prev = mergedIntervals[mergedIntervals.length - 1];
    let curr = intervals[i];
    if (prev[1] >= curr[0]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      mergedIntervals.push(curr);
    }
  }

  // Calculate sum of interval lengths
  let sum = 0;
  for (let i = 0; i < mergedIntervals.length; i++) {
    sum += mergedIntervals[i][1] - mergedIntervals[i][0];
  }
  return sum;
}

sumIntervals([[-5, 5]]);
sumIntervals([[3, 10], [1, 5]]);
sumIntervals([[-1e9, 1e9]]);


// Didn't work with large numbers: 

// function sumIntervals(intervals) {
//   let covered = {};
//   intervals.forEach(interval => {
//     for (let i = interval[0]; i < interval[1]; i++) {
//       if (!covered[i]) {
//         covered[i] = true;
//       }
//     }
//   });
//   return Object.keys(covered).length;
// }