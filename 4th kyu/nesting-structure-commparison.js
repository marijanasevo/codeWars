// Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

// For example:
//  // should return true
// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

//  // should return false 
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// // should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// // should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     
// For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.

const isArray = (arr) => Array.isArray(arr);

Array.prototype.sameStructureAs = function (other) {
  if (this.length != other.length) return false;

  for (let i = 0; i < other.length; i++) {
    const [isThisArr, isOtherArr] = [isArray(this[i]), isArray(other[i])];

    if (isThisArr !== isOtherArr) return false;
    if (isThisArr && isOtherArr && !this[i].sameStructureAs(other[i]))
      return false;
  }

  return true;
};

[1,[1,1]].sameStructureAs([2,[2,2]]); // true
[1,[1,1]].sameStructureAs([[2,2],2]); // false
[[[],[]]].sameStructureAs([[[],[]]]); // true
[[[],[]]].sameStructureAs([[1,1]]); // false
[1,[[[1]]]].sameStructureAs([2,[[[2]]]]); // true
[].sameStructureAs(1); // false
[1,'[',']'].sameStructureAs(['[',']',1]); // true
[1,2].sameStructureAs([[3],3]); // false




// Loved this one
// Array.prototype.sameStructureAs = function (other) {
//   return isArray(other) && other.length === this.length && other.every((otherEl, i) => {
//     let thisEl = this[i];
//     return isArray(otherEl) ? otherEl.sameStructureAs(thisEl) : isArray(otherEl) == isArray(thisEl);
//   });
// };