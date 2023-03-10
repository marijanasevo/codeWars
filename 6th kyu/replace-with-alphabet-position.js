// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  let result = '';

  for (let letter of text) {
    let code = letter.toUpperCase().charCodeAt();
    if (code > 64 && code < 91) result += (code - 64) + ' ';
  }

  return result.slice(0, -1);
  
  // return [...text]
  //   .map(letter => {
  //     let code = letter.toUpperCase().charCodeAt() - 64;
  //     if (code < 1) return null;
  //     return code;
  //   })
  //   .filter(num => num !== null)
  //   .join(' ');
}

alphabetPosition("The sunset sets at twelve o' clock.");