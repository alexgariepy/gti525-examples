import fs from 'node:fs';
import { EventEmitter } from 'node:events';

function registerEvents(emitter, keywords) {
  const counts = {};
  for (const keyword of keywords) {
    counts[keyword] = 0; // Initialize count to 0
    emitter.on(keyword, () => {
      counts[keyword]++;
    });
  }

  // Return a function to print the hashmap at the end
  return function printCounts() {
    console.log("Résultat du comptage des mots-clés :");
    for (const [key, value] of Object.entries(counts)) {
      console.log(`"${key}": ${value}`);
    }
  };
}

const eventEmitter = new EventEmitter();

// Lit le contenu du fichier et définit les gestionnaires pour analyser les mots
const text = fs.readFileSync("alice_book.txt").toString();
// console.log(text.length);
const keywords = ["Alice", "little", "Rabbit", "Turtle", "Lobster"];
const printCounts = registerEvents(eventEmitter, keywords);

const words = text.split(" ");
words.forEach( word => {
    eventEmitter.emit(word.trim());
});

printCounts();