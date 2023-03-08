// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

function numberOfPairs(gloves) {
  let pairs = 0; 

  while (gloves.length) {
    let duplicatesIndex = gloves.indexOf(gloves[0], 1);
    if (duplicatesIndex !== -1) {
      pairs++
      gloves = gloves.slice(1, duplicatesIndex).concat(gloves.slice(duplicatesIndex + 1));
    } else {
      gloves = gloves.slice(1);
    }
  }

  return pairs;
}

numberOfPairs(['red','red']); // 1
numberOfPairs(['red','green','blue']); // 0
numberOfPairs(['gray','black','purple','purple','gray','black']); // 3
