// https://www.codewars.com/kata/638e399a2d712300309cf11c

const ascendant = (numA, numB) => numA[1] - numB[1];

function renderChampions(subm, minimumSub) {
  if (subm.length < minimumSub) return "";
  
  let start = subm.slice(0, minimumSub).sort(ascendant);
  let smallest = start[0][1];
  let champEntries = subm
    .filter((entrie) => {
      if (smallest >= entrie[1]) {
        smallest = entrie[1];
        return true;
      }
      return false;
    })
    .sort(ascendant);

  let organizedChamps = {};
  champEntries.forEach((prop) => {
    if (prop[0] in organizedChamps) {
      organizedChamps[prop[0]].push(prop[1]);
    } else {
      organizedChamps[prop[0]] = new Array();
      organizedChamps[prop[0]].push(prop[1]);
    }
  });

  const arrayOfChamps = Object.entries(organizedChamps);
  return arrayOfChamps
    .map(([key, value]) => [
      key,
      value.map((scoreA) => {
        let count = 0;
        value.forEach((score) => score === scoreA && count++);
        if (count > 1) return `${scoreA} (${count})`;
        return scoreA;
      }),
    ])
    .map(([key, value]) => [
      key,
      [...new Set(value)].map((x, i) => (i > 0 ? ` ${x}` : x)),
    ])
    .map((x) => x.join(" - "))
    .join("; ");
}

// too few submissions
renderChampions([["Tim",45], ["Jeff",42]], 3); // -> ""      

// Joanne has the record of length 22, but also had the record of 23 after 1 submission
renderChampions([["Joanne",23], ["Joanne",22]], 1); // -> "Joanne - 22, 23"

// Joanne has the record of length 22, which is the best result after 2 submissions
renderChampions([["Joanne",23], ["Joanne",22]], 2); // -> "Joanne - 22"

// Jane has the record of length 34, but John had the record of length 35 after 1 submission
renderChampions([["John",35], ["Jane",34]], 1); // -> "Jane - 34; John - 35"

// Jane has the record of length 34, as John's attempt was in the initial 2 submissions and got overshadowed by Jane's attempt
renderChampions([["John",35], ["Jane",34]], 2); // -> "Jane - 34"

// John has the record of length 114, but he also has 2 record submissions of length 117, note that his 3th 117 does not count, as a better record was made by Jane in between of length 115. 
renderChampions([["Jane",118], ["John",117], ["John",117], ["Jane",115], ["John",117], ["John",114]], 2); // -> "John - 114, 117 (2); Jane - 115"

renderChampions( [['Joanne', 146], ['Joanne', 126], ['Joanne', 148], ['Joanne', 150], ['Joanne', 133]], 1 ); //  Joanne - 126, 146

renderChampions( [['Rani', 22], ['Rani', 22], ['Rani', 21], ['Rani', 22]], 2 ); // Rani - 21, 22(2)