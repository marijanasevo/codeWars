// zipWith ( or zip_with ) takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
// The function value is one new array.

// If the arrays are of unequal length, the output will only be as long as the shorter one.
// (Values of the longer array are simply not used.)

// Inputs should not be modified.

function zipWith(fn, arr1, arr2) {
  let zipped = arr1.map((item, i) => {
    return (item == undefined || arr2[i] == undefined) ? undefined : fn(item, arr2[i]);
  })
    .filter(item => item != undefined);
  return zipped;
}

zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]); // [1, 20, 100, 1000]
zipWith(Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1]); // [4,7,7,4,7,7]
zipWith(plus, [0,1,2,3,4,5], [6,5,4,3,2  ]); // [6,6,6,6,6  ]

function plus(a, b) {
  return a + b;
}


// A solution I found interesting

// function zipWith(fn, arr1, arr2) {
//   return Array.from({length: Math.min(arr1.length, arr2.length)}, (_, i) => fn(arr1[i], arr2[i]));
// }