let readlineSync = require("readline-sync");
let userChances = readlineSync.questionInt("how many times you want to guess: ");
let randomNumber= Math.floor(Math.random()*10);
chances = userChances;
 
for (let i = chances; i > 0; i--) {
   console.log("you have"+i+"chances to guess")
   userGuess = readlineSync.questionInt("guess number: ")
   if (userGuess == randomNumber) {
       console.log("congrats! ,your guess is right")
       break
   }
   else if(userGuess<randomNumber){
       console.log("go higher!");
   }
   else if(userGuess>randomNumber){
       console.log("go lower!");
   }
   else if(i == 1) {
       console.log("sadly!, your chances are completed")
   }
}

