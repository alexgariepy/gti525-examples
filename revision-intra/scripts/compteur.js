function createCountDown(initialCount = 0) {
    initialCount++;

    function deincrement() {
        if(initialCount <= 0) {
            return 0;
        }
        initialCount--;
        return initialCount
    }

    return deincrement;
}


const counter1 = createCountDown(2);
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log('------------------');

const counter2 = createCountDown(5);
console.log(counter2());
console.log(counter2());