var express = require('express');
var router = express.Router();

/* GET animals listing, optionally filtered by type */
router.get('/', function(req, res, next) {
  const type = req.query.type;
  const limit = parseInt(req.query.limit) || 50; // Default to 50 if not specified

  // Replace with your DB/filter logic
  if (type) {
    res.send(`Liste des ${limit} animaux de type: ${type}`);
  } else {
    res.send(`Liste des ${limit} animaux`);
  }
});

/* ADD a new animal */
router.post('/', function(req, res, next) {
  // Here you would typically handle the request to add a new animal
});

/* Declare an animal as sick */
router.patch('/:id', function(req, res, next) {
  // Here you would typically handle the request to declare an animal as sick
});

/* Put an animal up for adoption */
router.post('/ventes', function(req, res, next) {
  // Here you would typically handle the request to put an animal up for adoption
});

/* Define an animal as child of another */
router.put('/:id/child/:parentId', function(req, res, next) {
  // Here you would typically handle the request to define an animal as a child of another
});

/* Check if animal has been vaccinated */
router.get('/:id/vaccinated/vaccins/:vaccinId', function(req, res, next) {
  // Here you would typically handle the request to check if an animal has been vaccinated
});

/* GET an auth token */
router.get('/auth', function(req, res, next) {
  // Here you would typically handle the request to get an auth token
});

/* transfer animal titles to another user */
router.post('/transfer/:id', function(req, res, next) {
  // Here you would typically handle the request to transfer animal titles to another user
});

module.exports = router;
