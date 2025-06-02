const invokeTimes = (func, noTimes, time) => {
  // Complétez le code...
    let count = 0;
    const intervalId = setInterval(() => {
        if (count < noTimes) {
            func(count);
            count++;
        } else {
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