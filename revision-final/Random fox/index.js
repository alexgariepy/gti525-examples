function fetchFox() {
  let URL = `https://randomfox.ca/floof`;
  return new Promise((resolve, reject) => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => resolve(data.image))
      .catch((error) => reject("Demande invalide."));
  });
}

function fetchCorporateBullshit() {
  let URL = "https://corporatebs-generator.sameerkumar.website/";
  return new Promise((resolve, reject) => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => resolve(data.phrase))
      .catch((error) => reject("Demande invalide."));
  });
}

function displayFoxAndBullshit() {
  const foxImageElement = document.getElementById("foxImage");
  const corporatePhrase = document.getElementById("corporatePhrase");
  fetchCorporateBullshit()
    .then((phrase) => {
      corporatePhrase.textContent = phrase;
    })
    .catch((error) => {
      corporatePhrase.textContent = error;
    });
  fetchFox()
    .then((imageUrl) => {
      foxImageElement.src = imageUrl;
    })
    .catch((error) => {
      foxImageElement.alt = error;
      foxImageElement.src = "";
    });
}

displayFoxAndBullshit();