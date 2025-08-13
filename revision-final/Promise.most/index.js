Promise.most = function(proms) {
    // Complétez cette fonction...
    let resolvedCount = 0;
    let rejectedCount = 0;
    for(const element of proms) {
        element.then(() => {
            resolvedCount++;
        }).catch(() => {
            rejectedCount++;
        });
    }
    return new Promise((resolve, reject) => {
        Promise.allSettled(proms).then(() => {
            if (resolvedCount > rejectedCount) {
                resolve();
            } else if (resolvedCount === rejectedCount) {
                resolve();
            }
            else {
                reject();
            }
        });
    });
}


let proms1 = [Promise.resolve(), Promise.reject(), Promise.reject()];
try {
  const result = await Promise.most(proms1);
  console.log("Majorité des promesses résolues");
} catch(err) {
  console.log("Majorité des promesses rejetées");
}

let proms2 = [Promise.resolve(), Promise.reject(), Promise.reject(), Promise.resolve()];
try {
  const result = await Promise.most(proms2);
  console.log("Majorité des promesses résolues");
} catch(err) {
  console.log("Majorité des promesses rejetées");
}