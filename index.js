
var readlineSync = require('readline-sync');
score =0;

var highScores =[
  {
  name: "Ranjit",
  score: '10'
},
{
  name: "Pravallika",
  score: '09'
},
{
  name: "Sneha",
  score: '8'
}];

function userWelcome()
{
var userName =  readlineSync.question("Hey, what is your name ");
console.log("Welcome "+userName);
}

var questionsBank=[{
  question: "1. Who is the F1 Champion of 2020? \n A. SebastiaN Vettal\n B. Fernando Alonso\n C. Kimi Raikonen\n D. Lewis Hamiltion\n Enter your answer: ",
  answer: "D"
},
{
  question: "2. Who drives for Redbull from below? \n A. Daniel Riccardo\n B. Gasly\n C. Sergieo Perez\n D. Charles Leclrec\n Enter your answer: ",
  answer: "C"
},
{
  question: "3. In which country does F1 Finale usually held? \n A. USA\n B. UK\n C. Japan\n D. UAE\n Enter your answer: ",
  answer: "D"
},
{
  question: "4. Who is the name of circuit in India? \n A. Baku\n B. Monza\n C. Buddh\n D. Mugello\n Enter your answer: ",
  answer: "C"
},
{
  question: "5. What is the name of F1 team Vijay Mallaya owned once? \n A. Ferrari\n B. Mercedes\n C. Force India\n D. Williams\n Enter your answer: ",
  answer: "C"
},{
  question: "6. Who owms maximum number of Pole Positions? \n A. Schumacher\n B. Vettel\n C. Nico Rosberg\n D. Lewis\n Enter your answer: ",
  answer: "D"
},{
  question: "7. Who returned to F1 for 2021 after retirement? \n A. Kimi\n B. Alonso\n C. Nico\n D. Hulkenberg\n Enter your answer: ",
  answer: "B"
},{
  question: "8. Who is the team Sergio recently signed for? \n A. Redbull\n B. Aston Martin\n C. Racing Point\n D. William\n Enter your answer: ",
  answer: "A"
},
{
  question: "9. What is the company that develops F1? \n A. EA\n B. Tencet\n C. Codemasters\n D. Sony\n Enter your answer: ",
  answer: "C"
},
{
  question: "10. Who is the constructor Champion? \n A. Redbull\n B. Aston Martin\n C. Racing Point\n D. Mercedes\n Enter your answer: ",
  answer: "D"
}]

function play(question, answer) {
  var userAnswer =  readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    score++;
    console.log("You are correct! Score is "+ score);
    console.log("-----------------------");
  }
  else
  {
    console.log("You missed that! Try again."
    
    )
  }
}

function game() {
  for (var i=0; i<questionsBank.length; i++) {
    var currentQuestion = questionsBank[i];
    console.log("-------------------------");
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function scores() {
  console.log(" Your total Score is " + score +"\nBelow are the top scores");
  for(var i=0; i<=highScores.length; i++)
  {
    console.log(highScores[i]);
  }
  console.log("If you have beaten highscores, please send us a screenshot");
}


userWelcome();
game();
scores();
