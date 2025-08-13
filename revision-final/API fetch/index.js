function fetchAdvice(adviceId) {
    // Complétez la fonction...
    let URL = `https://api.adviceslip.com/advice/${adviceId}`;
    return new Promise((resolve, reject) => {
        fetch(URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => resolve(data.slip.advice))
            .catch(error => reject("Demande invalide."));
    });
}


const advice = await fetchAdvice(45);
console.log(advice);


try {
  const advice = await fetchAdvice('X');
  console.log(advice);
} catch(error) {
  console.log(error);
}