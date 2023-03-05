// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

// Create as many "shufflings" as you can!

// Examples:

// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// Note: The order of the permutations doesn't matter.


function getPermutations(str) {
  const permutations = new Set();

  if (str.length === 0) {
    permutations.add('');
    return permutations;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    const perms = getPermutations(remaining);

    for (const perm of perms) {
      permutations.add(char + perm);
    }
  }

  return permutations;
}

function permutations(str) {
  return Array.from(getPermutations(str));
}

permutations('a');
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

// visualizer: https://www.recursionvisualizer.com/?function_definition=def%20getPermutations%28string%29%3A%0A%20%20%20%20permutations%20%3D%20set%28%29%0A%0A%20%20%20%20if%20len%28string%29%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20permutations.add%28''%29%0A%20%20%20%20%20%20%20%20return%20permutations%0A%0A%20%20%20%20for%20i%20in%20range%28len%28string%29%29%3A%0A%20%20%20%20%20%20%20%20char%20%3D%20string%5Bi%5D%0A%20%20%20%20%20%20%20%20remaining%20%3D%20string%5B%3Ai%5D%20%2B%20string%5Bi%2B1%3A%5D%0A%20%20%20%20%20%20%20%20perms%20%3D%20getPermutations%28remaining%29%0A%0A%20%20%20%20%20%20%20%20for%20perm%20in%20perms%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20permutations.add%28char%20%2B%20perm%29%0A%0A%20%20%20%20return%20permutations&function_call=getPermutations%28'aabb'%29