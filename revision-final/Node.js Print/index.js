import fs from 'fs';
import https from 'https';

function printLines(pathToFile, startLine, lastLine) {
    const readStream = fs.createReadStream(pathToFile, { encoding: 'utf8' });

    // Résultat à afficher
    let ret = "";

    readStream.on("data", function (blob) {
        // Complétez le code...
        const lines = blob.split("\n");
        if(!lastLine) {
            lastLine = startLine; // Si lastLine n'est pas fourni, on utilise startLine
        }
        for (let i = startLine - 1; i < lastLine && i < lines.length; i++) {
            ret += lines[i] + "\n";
        }
    });

    readStream.on("end", function () {
        console.log(ret);
    });

    readStream.on("error", function () {
        console.log("Erreur survenue lors de la lecture du fichier: " + pathToFile);
    });
}

function printLinesFromUrl(url, startLine, lastLine) {
    let data = '';

    https.get(url, (res) => {
        res.setEncoding('utf8');
        res.on('data', chunk => {
            data += chunk;
        });
        res.on('end', () => {
            const lines = data.split('\n');
            if (!lastLine) lastLine = startLine;
            let ret = '';
            for (let i = startLine - 1; i < lastLine && i < lines.length; i++) {
                ret += lines[i] + '\n';
            }
            console.log(ret);
        });
    }).on('error', (err) => {
        console.log("Erreur lors du téléchargement :", err.message);
    });
}

// // Cet appel doit afficher le contenu de la ligne 4
// printLines("sample.txt", 4);

// // Cet appel doit afficher le contenu concaténé des lignes firstLine à lastLine inclusivement
// printLines("sample.txt", 4, 7);

// Exemple d'utilisation :
printLinesFromUrl(
  "https://www.gutenberg.org/cache/epub/67122/pg67122.txt",
  4
);

printLinesFromUrl(
  "https://www.gutenberg.org/cache/epub/67122/pg67122.txt",
  4, 7
);