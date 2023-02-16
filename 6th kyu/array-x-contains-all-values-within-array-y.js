// DESCRIPTION:
// We want to extend the array class so that it provides a contains_all? method. This method will always assume that an array is passed in and will return true if all values in the passed in array are present within the current array.

// For example:

// const {assert,config} = require("chai"); config.truncateThreshold = 0;

// it("example tests",()=>{
//   assert.strictEqual( [1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([1,2,3,4,5]), true );
//   assert.strictEqual( [1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([9,2,5,4,10]), true );
//   assert.strictEqual( [1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([12,15]), false );
//   assert.strictEqual( [1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([]), true );
//   assert.strictEqual( [].containsAll([12,15]), false );
//   assert.strictEqual( [].containsAll([]), true );
// });


const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Object.defineProperty(Array.prototype, 'containsAll', { value: function containsAll(a) {
  return a.every(argumentItem => this.includes(argumentItem));
}});

items.containsAll([1, 2, 3]);
items.containsAll([1, 5, 13]);

