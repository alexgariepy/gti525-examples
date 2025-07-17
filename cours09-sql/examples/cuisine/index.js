import express from 'express';
import dishRouter from './routers/dishes.js';
import itemRouter from './routers/items.js';
import pagesRouter from './routers/pages.js';

const app = express();
const PORT = process.env.NODE_PORT || 3050;

// Pour servir les pages Web d'exemple
app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use("/api/dishes", dishRouter);
app.use("/api/items", itemRouter);
app.use(pagesRouter);

app.listen(PORT, () => console.log(`Le serveur écoute sur le port ${PORT}`));