// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  const charCounter = {};

  for (let char of string) {
    (char in charCounter) ? 
      charCounter[char]++ : charCounter[char] = 1;
  }

  return charCounter;
}

count(''); //  {});
count('a'); //  {'a': 1});
count('ab',); // {'a': 1, 'b': 1});
count('aba'); //  {'a': 2, 'b': 1});
count('ABC',); // {'A': 1, 'B': 1, 'C': 1});