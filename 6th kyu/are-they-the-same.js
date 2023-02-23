// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]


let a = [121, 144, 19, 161, 19, 144, 19, 11];
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

function comp(array1, array2){
  if (array1 == null || array2 == null ) return false;
  
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  
  return array2.every((item, i) => {
    if (array1[i] == 0 && item == 0) return true;
    return item / array1[i] == array1[i];
  });
}

comp(a, b); // true
comp([]) // false
comp([4, 6, 0, 2, 5, 10, 6, 8, 0, 9, 3, 8, 3, 0, 9, 9, 6, 10, 10, 4, 3, 9, 1, 10, 2], [100, 64, 100, 4, 0, 4, 1, 100, 81, 16, 9, 9, 100, 81, 36, 0, 81, 0, 36, 25, 81, 36, 9, 64, 16]); // true