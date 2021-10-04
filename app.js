console.log(123)

//// 1. Add a `prevGuesses` property to the `game` object initialized to an empty array.    Complete
//// 2. Add a `getGuess` method to `game` that prompts the player to enter a guess with a message formatted as: *Enter a guess between [smallestNum] and [biggestNum]:*.
////// Replacing [smallestNum] 
//// Hint - use a template literal for the prompt message.
//// 3. Ensure that the `getGuess` method returns a value that:
////     - Is a *number*, not a *string*.
////     - Is between `smallestNum` and `biggestNum`, inclusive.
////     - Hints:
//////         - This is a great use case for a `while` loop.
////         - `parseInt` returns `NaN` if the string cannot be parsed into a number.
//// 4. From within the `play` method, invoke the `getGuess` method from inside a loop, and add the new guess to the `prevGuesses` array.
//     - Hint: this is an excellent use for a while loop (or even a do...while loop!)
// 5. Add a `render` method to `game` that `play` will call after a guess has been made that alerts:
//     - If the secret has been guessed: `Congrats! You guessed the number in [number of prevGuesses]!`
//     - Otherwise: `Your guess is too [high|low] Previous guesses: x, x, x, x`
//     - Hints:
//         - `render` won’t be able to access any of `play`’s local variables, e.g., `guess`, so be sure pass `render` any arguments as needed (you may not have built your program to use any, that's ok if that's the case!)
//         - Template literals not only have interpolation, but they also honor whitespace - including line breaks!
//         - The list of previous guesses can be generated using the array `join` method.
// 6. The `play` method should end (`return`) when the guess matches `secretNum`.




// getGuess method to return a number use parse int because messages recieved will be strings 

//
const game = {

  title: 'Guess the Number!',

  biggestNum: 5,

  smallestNum: 1,

  secretNum: null,

  prevGuesses : [],

  getGuess: function(){
    
    let guess 

    
//while loop while any condition in the loop is true keep running 
//so if its below or above the range keep asking, if its not a number keep asking 
//will not take a value that doesnt conform to our data standard 

  while(guess>this.biggestNum || guess<this.smallestNum || isNaN(guess)){
    guess =parseInt( prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum} to start to play`))
  }
    

  return guess

    },


    play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    let win=false
    do{
        
      this.prevGuesses.push(this.getGuess())
      this.render(this.secretNum)

    }while(this.prevGuesses[this.prevGuesses.length-1] 
      !== this.secretNum)

    

console.log(this.secretNum)
//console.log(this.prevGuesses)

    },
render : function(x){
  let guessString= this.prevGuesses.join(', ')
 console.log(x)
 
  if(this.prevGuesses[this.prevGuesses.length-1]< x){
  
    alert(`you did not guess right, your guess was to low you previous guesses are ${guessString}`)
  
  }else if(this.prevGuesses[this.prevGuesses.length-1]> x){
    console.log('high')
    window.alert(`you did not guess right, your guess was to high you previous guesses are ${guessString}`)

  }else if(x ===this.prevGuesses[this.prevGuesses.length-1]){
    console.log('right')
    window.alert(`you win you got it in ${this.prevGuesses.length} tries`)

  }
}

  // if(win === false && arrP[arrP.length-1]<secret ){
  
  //   alert(`you did not guess right, your guess was to low you pr`)
  
  // }else if(win === false && arrP[arrP.length-1]>secret ){

  //   return `you did not guess right, your guess was to high`
  
  // }else{

  // return `winner winner chicken dinner you got it in ${arrP.length} guesses`
  // }

}

game.play()

// function printGuesses(arr){
// let printStr='Your previous guesses are '
//   for(let i=0; i<arr.length; i++){
//     printStr+= arr[i] + ','
//   }
//   return printStr
// this works for printing previous guess 







// console.log(game)
//  let guess= ''
//  while(secretNum!== guess){
//   guess = prompt('Enter a guess or "quit" to exit: ');
  
//  }



