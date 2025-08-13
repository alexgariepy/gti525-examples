function Promise_all(promises) {
  // Completez le code...
  let rejected = false;
  let failedPromise;
  let array = [];
  for (const element of promises) {
    element
      .then((result) => {
        // Do something when the promise resolves
        array.push(result);
      })
      .catch((result) => {
        // Do something when the promise rejects
        rejected = true;
        failedPromise = result;
      });
  }
  return new Promise((resolve, reject) => {
    Promise.allSettled(promises).then(() => {
      if (rejected) {
        reject(failedPromise);
      } else {
        resolve(array.sort((a, b) => a - b)); // Sort the results in ascending order
      }
    });
  });
}


const array = await Promise_all([]);
console.log("Le tableau doit être []:", array);

var bientot = (val) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 200);
    });
}

const array2 = await Promise_all([bientot(1), bientot(2), bientot(3)]);
console.log("Le tableau doit être [1, 2, 3]:", array2);

try {
    await Promise_all([bientot(1), Promise.reject("X"), bientot(3)]);
} catch (error) {
    console.log("Erreur:", error);
}