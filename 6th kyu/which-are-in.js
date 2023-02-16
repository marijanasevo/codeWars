// DESCRIPTION:
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Test:
// const { assert, config } = require('chai');
// config.truncateThreshold = 0;

// describe("Tests", () => {
//   it("test", () => {
    
//     a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

//     a1 = ["xyz", "live", "strong"]
//     assert.sameOrderedMembers(inArray(a1, a2), ["live", "strong"])

//     a1 = ["live", "strong", "arp"]
//     assert.sameOrderedMembers(inArray(a1, a2), ["arp", "live", "strong"])

//     a1 = ["tarp", "mice", "bull"]
//     assert.sameOrderedMembers(inArray(a1, a2), [])
//   });
// });

// returns []

const a1 = ["live", "strong", "arp"];
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

function inArray(array1, array2) {
  return array1
    .filter(subString => array2.find(string => string.includes(subString)))
    .sort();
}

console.log(inArray(a1, a2));