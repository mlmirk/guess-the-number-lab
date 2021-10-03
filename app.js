console.log(123)

//have a varible pointing to null when play() is envoke fill it with an empty array called prevGuesses

// getGuess method to return a number use parse int because messages recieved will be strings 

//
const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses : [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    
  },
  getGuess: function(){
    console.log(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)



  return parseInt(guess) 
  },
  printGuesses: function (arr){
    let printStr='Your previous guesses are '
      for(let i=0; i<arr.length; i++){
        printStr+= arr[i] + ','
      }
      return printStr
    }// this works for printing previous guess 
}

function printGuesses(arr){
let printStr='Your previous guesses are '
  for(let i=0; i<arr.length; i++){
    printStr+= arr[i] + ','
  }
  return printStr
}// this works for printing previous guess 

// console.log(game)
//  let guess= ''
//  while(secretNum!== guess){
//   guess = prompt('Enter a guess or "quit" to exit: ');
  
//  }


