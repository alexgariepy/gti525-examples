const http = require('node:http');
const fs = require('node:fs');
const { Transform } = require('node:stream');

const hostname = 'localhost';
const port = process.env.NODE_PORT || 3000;
const dataset = 'video_game_films.csv';

// Classe pour transformer le CSV en objets JSON
class ToJson extends Transform {
    constructor() {
        super();
        this.firstChunk = true;      // Pour savoir si c'est la première portion de données
        this.fieldNames = null;      // Stocke les noms des colonnes
    }

    _transform(chunk, encoding, callback) {
        // Découpe le chunk en lignes
        let lines = chunk.toString().split('\n');
        // Si c'est le premier chunk, on récupère les noms des colonnes
        if (this.firstChunk) {
            this.fieldNames = lines.shift().trim().split(',');
            this.firstChunk = false;
        }

        let objs = [];
        // Pour chaque ligne, on crée un objet avec les noms de colonnes comme clés
        lines.forEach(line => {
            let values = line.trim().split(',');
            let obj = {};
            values.forEach((value, index) => {
                obj[this.fieldNames[index]] = value;
            });
            objs.push(obj);
        });

        // On envoie le tableau d'objets JSON sous forme de chaîne
        callback(null, JSON.stringify(objs));
    }
}

// Création du serveur HTTP
const server = http.createServer((req, res) => {
    // Si la requête est pour /movies
    if (req.url.startsWith("/movies")) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS, POST, GET"
        };

        res.writeHead(200, headers);
        // On lit le fichier CSV et on le transforme en JSON à la volée 
        const stream = fs.createReadStream(dataset);
        // On crée un objet ToJson et on le pipe dans la réponse (res)
        stream.pipe(new ToJson()).pipe(res);
    } else {
        // Pour toute autre route, on retourne 404
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("Introuvable");
    }
})

// Démarrage du serveur
server.listen(port, hostname, () => {
    console.log(`Serveur démarré à l'adresse http://${hostname}:${port}/`);
})