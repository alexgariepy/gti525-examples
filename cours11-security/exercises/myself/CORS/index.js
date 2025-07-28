import express from 'express';
const app = express();

// À compléter ici : (DONE)
//  ajouter les bons en-têtes CORS pour autoriser http://localhost:4000
// Configuration des en-têtes CORS
app.use((req, res, next) => {
  console.log("Requête reçue depuis :", req.headers.origin);
  const allowedOrigins = [
    "http://localhost:5000",
    "http://localhost:4000"
  ];
  if (allowedOrigins.includes(req.headers.origin)) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
  }
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // Gestion des requêtes préalables
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Données sécurisées', from: 'localhost:3050' })
});

app.listen(3050, () => {
  console.log('Serveur en écoute sur http://localhost:3050')
});