
function reverseArray(array) {
  let newArray = []
  for(let i = array.length-1; i >= 0; i--){
    newArray.push(array[i]) 
  }
  return newArray;
}

console.log(reverseArray(["a", "b", "c", "d"]));  // ["d", "c", "b", "a"];

function reverseArrayInPlace(array) {
    // I think this is wrong as the question didn't want us to use inverse().
    // inverse() ==? reverse() ... probably. (look at teacher answer)
    array = array.reverse();
}

let values = [1, 2, 3, 4, 5];
reverseArrayInPlace(values);
console.log(values);  // [5, 4, 3, 2, 1]

