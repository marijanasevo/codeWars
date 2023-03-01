// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

rgb(255, 255, 255); // returns FFFFFF
rgb(255, 255, 300); // returns FFFFFF
rgb(0,0,0); // returns 000000
rgb(148, 0, 211); // returns 9400D3

function rgb(r, g, b) {
  return rgbToHex(r) + rgbToHex(g) + rgbToHex(b);
}

function rgbToHex(num) {
  // out of range cases
  if (num > 255) num = 255;
  if (num < 0) num = 0;

  return ('0' + num.toString(16))
            .slice(-2)
            .toUpperCase();
}


// code could be optimized for better space and time complexity

// function rgbToHex(...rgb) {
//   let hex = rgb.map((color) => {

//     // out of the range cases
//     if (color > 255) color = 255;
//     if (color < 0) color = 0;

//     let quotient = parseInt(color / 16);
//     let remainder = color % 16;
    
//     [quotient, remainder] = [quotient, remainder].map(n => {
//       if (n == 10) return 'A';
//       if (n == 11) return 'B';
//       if (n == 12) return 'C';
//       if (n == 13) return 'D';
//       if (n == 14) return 'E';
//       if (n == 15) return 'F';
//       if (n < 10) return n;
//     }); 

//     return quotient + '' + remainder;
//   }).join('');

//   return hex;
// }