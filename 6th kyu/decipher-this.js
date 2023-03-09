// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:
// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples
// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
  return str.split(' ')
    .map(word => {
      let firstLetter = String.fromCharCode(parseInt(word));
      word = word.replace(/^\d+/g, firstLetter);
      if (word.length > 2) {
        word = word.slice(0, 1) + word.slice(-1) + word.slice(2, -1) + word[1];
      }
      return word;
    })
    .join(' ');
}

// function decipherThis(str) {
//   return str.split(' ')
//     .map(word => {
//       return word.replace(/^\d+/, num => String.fromCharCode(num))
//               .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2");
//     })
//     .join(' ');
// }

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'); 
// 'Have a go at this and see how you do'