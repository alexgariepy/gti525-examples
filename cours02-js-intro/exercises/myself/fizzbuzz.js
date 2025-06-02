function fizzBuzz(...values){
  for(value of values){
    if(value % 3 === 0 && value % 5 === 0){
      console.log(value + " : FizzBuzz")
    }
    else if(value % 3 === 0){
      console.log(value + " : Fizz")
    }
    else if(value % 5 === 0){
      console.log(value + " : Buzz")
    }
  }
}
console.log("Hello World")
fizzBuzz(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)

// replace values with a single int, then for loop until at int to have a 1 argument function
// for(let i =0, i < arg; i++)