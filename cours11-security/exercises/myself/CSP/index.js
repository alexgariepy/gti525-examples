import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "script-src 'self'");
  next();
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
  console.log('Serveur en écoute sur http://localhost:3000')
})