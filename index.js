var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("May I have you name please? ");
console.log("-------------------------")

console.log("Hey! " + userName + " HAPPY TO SEE YOU 😄")
console.log("Let's play a quiz!")

console.log("---------------------------------")

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase === answer.toUpperCase) {
    console.log("right!");
    score = score +1;
  } else {
    console.log("wrong");
  }
  console.log("Score is: " + score);
  console.log("----------------");
}

var questions =
[
  { question: "Who is the most favourite superhero in MARVEL? 🤔 ",
    answer: "ironman"},
  
  { question: "Who is the GOD of thunder? 🤔 ",
    answer: "thor"},
  
 { question: "What is ironman's costume color? 🤔 ",
   answer: "red gold"},
  
 { question: "What is hulk's real name? 🤔 ",
   answer: "bruce banner"},
  
 { question: "What is captain america's age? 🤔 ",
   answer: "80"}
];

for (var i = 0; i < questions.length; i++) {
var currentQuestion = questions[i];
play(currentQuestion.question, currentQuestion.answer)
}

if (score == 5){
 console.log("Your final score is: " + score +" 🥳");
 console.log("You are such a MCU fan! 🤩")
} else {
 console.log("Go watch some MCU movies dud 😒")
}
