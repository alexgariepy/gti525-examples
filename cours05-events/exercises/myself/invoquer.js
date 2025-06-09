const invokeTimes = (func, noTimes, time) => {
  // Complétez le code...
    let count = 0;
    const intervalId = setInterval(() => {
        if (count < noTimes) {
            // Call the provided function with the current count
            func(count);
            count++;
        } else {
            // Stop the interval when the count reaches noTimes
            clearInterval(intervalId);
        }
    }, time);
}

const setup = function () {
    invokeTimes(function (i) {
        console.warn("hello " + i);
    }, 10, 1000);
};

setup();