const http = require("node:http");

const hostname = "localhost";
const port = process.env.NODE_PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Salut tout le monde!\n");
});

server.listen(port, hostname, () => {
  console.log(`Serveur démarré à l'adresse http://${hostname}:${port}/`);
  // HTTPS DOESN'T WORK IN THIS EXAMPLE SINCE THE SERVER IS CREATED USING http.createServer((req, res)
  //console.log(`Serveur démarré à l'adresse https://${hostname}:${port}/`);
});

// start this in one terminal
// then in another terminal
// curl http://localhost:3000 (gets the content of the page)
