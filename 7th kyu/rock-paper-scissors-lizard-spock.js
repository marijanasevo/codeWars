// DESCRIPTION:
// In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// Rock crushes Scissors
// Task:
// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

// Inputs
// Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".

function rpsls(obj1, obj2) {
  //Your Magnificent Code here
  if (obj1 === obj2) return 'Draw!';

  let rules = {
    'rock': ['scissors', 'lizard'],
    'paper': ['rock', 'spock'],
    'scissors': ['paper', 'lizard'],
    'lizard': ['paper', 'spock'],
    'spock': ['scissors', 'rock']
  };

  return (rules[obj1].includes(obj2)) ? 'Player 1 Won!' : 'Player 2 Won!';
  
  // switch(pl1 + ' ' + pl2) {
  // case "rock scissors": case "scissors paper": case "paper rock": case "rock lizard": case "lizard spock": case "spock scissors": case "scissors lizard": case "lizard paper": case "paper spock": case "spock rock":
  //   return 'Player 1 Won!';
  // default:
  //   return 'Player 2 Won!';
  // }
}

rpsls('rock', 'scissors'); // "Player two won"
rpsls('paper', 'paper'); // "Draw"
rpsls('scissors', 'spock'); // "Player one won"