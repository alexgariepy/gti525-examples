function testTimeout(a, b, c, d, e) {
  var result = 0;
  setTimeout(function () {
    setTimeout(function () {
      result = (result * 10) + a;
    }, 400);
    result = (result * 10) + b;
  }, 500);

  result = (result * 10) + c;

  setTimeout(function () {
    setTimeout(function () {
      result = (result * 10) + d;
    }, 0);
    result = (result * 10) + e;
  }, 1000);

  setTimeout(function () {
    console.log(result);
  }, 5000);
}

testTimeout(2,9,6,1,7);