const readlineSync=require("readline-sync");
const chalk=require("chalk")

var highscores=[{
  name:"Amit Singh",
  score:8
}]

var questions=[{
  question: "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
	options: [ 2005, 2008, 2010, 2012],
	answer: 2008
},
{
  question: "What is the name of Thor’s hammer?",
	options: ["Vanir", "Mjolnir", "Aesir", "Norn"],
	answer: "Mjolnir"
},
{
  question: "In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film?",
	options: ["That he wants to study The Hulk", "That he knows about S.H.I.E.L.D", "That they are putting a team together", "That Thaddeus owes him money"],
	answer: "That they are putting a team together"
},
{
  question: "What is Captain America’s shield made of?",
	options: ["Adamantium", "Vibranium", "Promethium", "Carbonadium"],
	answer: "Vibranium"
},
{
  question: "The Flerkens are a race of extremely dangerous aliens that resembles what?",
	options: ["Cats", "Ducks", "Reptiles", "Raccoons"],
	answer: "Cats"
},
{
  question: "Before becoming Vision, what is the name of Iron Man’s A.I. butler?",
	options: ["H.O.M.E.R.", "J.A.R.V.I.S.", "A.L.F.R.E.D.", "M.A.R.V.I.N."],
	answer: "J.A.R.V.I.S."
},
{
  question: "What is the real name of the Black Panther?",
	options: ["T’Challa", "M’Baku", "N’Jadaka", "N’Jobu"],
	answer: "T’Challa"
},
{
  question: "What is the alien race Loki sends to invade Earth in The Avengers?",
	options: ["The Chitauri", "The Skrulls", "The Kree", "The Flerkens",],
	answer: "The Chitauri"
},
{
  question: "Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?",
	options: ["Thor", "Loki", "The Collector", "Tony Stark"],
	answer: "Loki"
},
{
  question: "What fake name does Natasha use when she first meets Tony?",
	options: ["Natalie Rushman", "Natalia Romanoff", "Nicole Rohan","Naya Rabe"],
	answer: "Natalie Rushman"
}
]


var score=0


function askquestion(questionNo,question,options,answer){
  console.log(chalk.bold("Q"+questionNo),":",""+question)
  let optionselected=readlineSync.keyInSelect(options,"your answer:")
  console.log("you are selected",chalk.green(options[optionselected]))

  if(answer===options[optionselected]){
    console.log(chalk.green("corrent answer"))
    return score=score+1
  }else{
    // console.log("wrong answer")
    console.log(chalk.red("wrong answer"))
    return score=score-0
  }
}

function checkifexit(){
  var ans=readlineSync.keyIn("Type e to exit or any other key to continue")

  if(ans==='e'){
    return true
  }else{
    return false
  }

}

function play(){
  var username=readlineSync.question("what is your name? ")
  console.log(chalk.bold.red("welcome ")+username)
  console.log("lets see wheather you know marvel universe ")
  console.log()

  var totalscore=0;
  for(let i=0;i<questions.length;i++){
    var score=askquestion(i+1,questions[i].question,questions[i].options,questions[i].answer)
    console.log("score :"+score)


    if(questions.length - 1 === i || checkifexit())
			break;
		console.log

    console.log("---------------------------------------------")
  } 
  for(var i=0;i<highscores.length;i++){
  var currenthighscores=highscores[i].score
  if(score>currenthighscores){
    console.log(chalk.bold.green("Congratulation HIGH SCORE"))
  }
}

  console.log(chalk.bold.red("Thank you for Playing the game"))
}



play()