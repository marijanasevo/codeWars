// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

function multiplicationTable(size) {
  const table = [];

  for (let i = 1; i <= size; i++) {
    const row = [];
    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  
  return table;
}


multiplicationTable(5); 


// some other task, note to self
// function multiplicationTable(size) {
//   let prevRow = 1;
//   let prev = 0;
//   const matrix = [];
//   for (let i = 0; i < size; i++) {
//     matrix.push([]);

//     for (let j = 0; j < size; j++) {

//       if (j === 0) {
//         prevRow = (i === 0) ? 1 : (i === 1) ? 2 : matrix[i - 1][0] + matrix[i - 2][0]; 
//         matrix[i].push(prevRow);
//         prev = prevRow;
//         continue;
//       } 

//       matrix[i].push(matrix[i][j-1] + prev);
//       prev = matrix[i][j - 1];
//     }
//   }
//   return matrix;
// }