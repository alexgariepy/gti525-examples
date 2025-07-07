To run server :

1. Make sure you have the same package.json + npm install

2. Run the server

3. Use the following commands in a seperate terminal for testing :

curl http://localhost:3000/movies

curl http://localhost:3000/movies/1

Notes :

You need to read and process the CSV file first (to load the data into memory), and only then create your routes. This ensures that when a request comes in, your movieDataset is already populated and ready to use.