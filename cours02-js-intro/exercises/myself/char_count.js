
function countCs(string){
    let count = 0;
    for(let c in string){
        if(string[c] === "C"){
            count++;
        }
    }
    return count;
}

function countChar(string, char){
    let count =0;
    for(let c in string){
        if(string[c] === char){
            count++;
        }
    }
    return count;
}

console.log(countCs("BBC"));   // 1
console.log(countChar("telephone", "e"));  // 3

// Most efficient way (reduce version)
const countChar2 = (str, c) => [...str].reduce((prev, cur) => cur === c ? ++prev : prev, 0);
// [...] turns the string str into an array ['B','B','C']
// prev is the counter (starts at 0)
// cur is the current char
// c represents the character to check for

function countCs2(string){
  return countChar2(string, "C")
}

console.log("Count version 2")
console.log(countCs2("BBC"));   // 1
console.log(countCs2("CALCULATRICE"));  // 3