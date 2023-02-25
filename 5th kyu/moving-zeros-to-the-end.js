// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// Doing this one sleepy

function moveZeros(arr) {
  return [...arr.filter(item => item !== 0),
          ...arr.filter(item => item === 0)];
}

moveZeros([false,1,0,1,2,0,1,3,"a"]); // returns[false,1,1,2,1,3,"a",0,0]

// function moveZeros(arr) {
//   return arr.sort((a, b) => {
//     (a === 0) ? a = 1 : a = 0;
//     (b === 0) ? b = 1 : b = 0;

//     return a - b;
//   });
// }
