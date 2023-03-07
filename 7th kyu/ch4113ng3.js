// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"


function nerdify(txt) {
  const code = {
    'a': '4',
    'A': '4',
    'e': '3',
    'E': '3',
    'l': '1'
  };

  return txt.replace(/[aelEA]/g, char => code[char]); 
  // return txt.split('').map(c => code[c] || c).join(''); 
}

nerdify("Fund4m3nt41s"); // "Fund4m3nt41s"
nerdify("Fundamentals"); // "Fund4m3nt41s"
nerdify("Seven"); // "S3v3n"
nerdify("Los Angeles"); // "Los 4ng313s"
nerdify("Seoijselawuue"); // "S3oijs314wuu3"