// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

// Examples:

// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// Additional Notes:

// The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
// All tested numbers are valid, you don't need to validate them


const nums = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90, hundred: 100, thousand: 1_000, ['one million']: 1_000_000};

function getNumber(str) {
  let res = 0, words = str.split(' ');

  for (let word of words) {
    if (word == 'hundred' || word == 'thousand') {
      res *= nums[word];
    } else if (word.includes('-')) {
      let [first, second] = word.split('-');
      res += nums[first] + nums[second];
    } else {
      res += nums[word]
    }
  }

  return res;
}

function parseInt(string) {
  if (string in nums) return nums[string];

  let result = 0, unitNum = {};

  if (string.match(/\sand\s/)) string = string.replace(/\sand\s/g, ' ');

  if (string.includes('thousand')) {
    const [thousand, hundred] = string.split(' thousand ');
    unitNum.thousand = getNumber(thousand);
    unitNum.hundred = getNumber(hundred);
  } else unitNum.hundred = getNumber(string);

  for (let unit in unitNum) {
    result += (unit !== 'hundred') ? unitNum[unit] * nums[unit] : unitNum[unit]
  }

  return result;
}

parseInt('one'); // 1);
parseInt('twenty'); // 20);
parseInt('two hundred forty-six'); // 246);
parseInt('seven hundred eighty-three thousand nine hundred and nineteen'); // 783919
parseInt('one million');