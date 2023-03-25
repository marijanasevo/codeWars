// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  const oddNumbersArray = array.filter(num => num % 2 !== 0);
  oddNumbersArray.sort((a, b) => a - b);

  return array.map(num => {
    // if the number is even, leave it as is, otherwise replace it with the next smallest odd number from the sorted array
    return (num % 2 === 0) ? num : oddNumbersArray.shift();
  });
}

sortArray([5, 3, 2, 8, 1, 4]); //, [1, 3, 2, 8, 5, 4]);
sortArray([5, 3, 1, 8, 0]); //, [1, 3, 5, 8, 0]);
sortArray([]); //,[]);