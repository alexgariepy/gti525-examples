To create an API route

1. Add route + type of route to the router that will reference a controller method
2. Create the method inside the controller that will reference the model method
3. Create the method inside the model that will run a db.command
4. Create the function behind the db.command inside the db.js
5. Create the Response type inside the abstract.js to return a proper response in the controller when the command succeeds.

6. Use following syntax to create an element
curl -X POST http://localhost:3000/api/artists -H "Content-Type: application/json" -d '{"name":"New Artist"}'

curl -X POST http://localhost:3000/api/albums -H "Content-Type: application/json" -d '{"title":"New Album","artistId":"277"}'

7. Debug by looking back at the terminal that started the server