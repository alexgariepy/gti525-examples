const express = require('express')
const fs = require('node:fs');
const port = process.env.NODE_PORT || 3000;
const csvfile = 'video_game_films.csv';

// Fonction asynchrone pour charger le dataset CSV en mémoire
async function loadDataset(readable) {
    let fieldNames = null; // Stocke les noms des colonnes
    let database = [];     // Stocke les objets de chaque film
    // Lecture du flux ligne par ligne
    for await (const chunk of readable) {
        let lines = chunk.toString().split('\n');
        // La première ligne contient les noms des colonnes
        if (fieldNames == null) {
            fieldNames = lines.shift().trim().split(',');
        }

        // Pour chaque ligne, on crée un objet avec les noms de colonnes comme clés
        lines.forEach(line => {
            let values = line.trim().split(',');
            let obj = {};
            values.forEach((value, index) => {
                obj[fieldNames[index]] = value;
            });
            database.push(obj);
        });
    }
    return database;
}

let movieDataset = {}; // Objet pour stocker les films indexés par leur id

// Lecture du fichier CSV et chargement en mémoire au démarrage
const readStream = fs.createReadStream(csvfile, {encoding: 'utf8'});
loadDataset(readStream).then(database => {
    //console.log(database) TESTING use this to see the loaded data
    database.forEach(movie => {
        movieDataset[movie.id] = movie; // Indexation par id
    })
}).catch(error => {
    console.log("Erreur de lecture du fichier d'entrée");
});

const app = express()

// Route pour obtenir tous les films
app.get('/movies', (req, res) => {
    res.json(Object.values(movieDataset));
});

// Route pour obtenir un film par son id
app.get('/movies/:movieId', (req, res) => {
    let movie = movieDataset[req.params.movieId];
    if (movie === undefined) {
        res.sendStatus(404); // Film non trouvé
    } else {
        res.json(movie); // Film trouvé
    }
});

// // Démarrage du serveur Express
// app.listen(port, () => {
//     console.log(`Serveur écoutant sur le port ${port}`)
// })
