let arrays = [[1, 2], [3, 4, 5], [6], [7, 8 , 9]];

function merge(array){
    let a = array.reduce( (a,b) => a.concat(b), [])
    return a
}

console.log(merge(arrays));
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9])
// [1, 2, 3, 4, 5, 6, 7, 8, 9]