function Promise_all(promises) {
  // Completez le code...
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Le paramètre doit être un tableau"));
    }

    if (promises.length === 0) {
      return resolve([]);
    }

    let results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  });

}

// ------ Pour tester le code ----------
Promise_all([]).then(array => {
  console.log("Le tableau doit être []:", array);
});

function bientot(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}

Promise_all([bientot(1), bientot(2), bientot(3)]).then(array => {
  console.log("Le tableau doit être [1, 2, 3]:", array);
});

Promise_all([bientot(1), Promise.reject("X"), bientot(3)])
  .then(array => {
    console.log("On ne doit pas arriver là");
  })
  .catch(error => {
      console.log("Erreur:", error);
  });