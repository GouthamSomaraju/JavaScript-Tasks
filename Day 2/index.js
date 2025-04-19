const prompt = require("prompt-sync")();

function secretNum() {
  let num = Math.floor(Math.random() * 10);
  return function user() {
    for (let i = 1; i <= 3; i++) {
      let input = +prompt(`Attempt ${i}: Guess number: `);

      if(isNaN(input)){
        console.log("Enter Valid Number");
        
      }
      if (input == num) {
        console.log("correct");
        return;
      } else if (input < num) {
        console.log("too low");
      } else if (input > num) {
        console.log("too high");
      } 
    //   else {
    //     console.log("Invalid Input");
    //     // break;
    //   }
    }
    console.log("The correct Number is", num);
  };
}
let output = secretNum();
output();
