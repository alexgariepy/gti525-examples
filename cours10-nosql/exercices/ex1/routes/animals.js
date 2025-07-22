var express = require('express');
var router = express.Router();

/* GET animals listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* ADD a new animal */
router.post('/', function(req, res, next) {
  // Here you would typically handle the request to add a new animal
});

/* GET animals by type */
router.get('/:type', function(req, res, next) {
});

/* Declare an animal as sick */
router.post('/:id', function(req, res, next) {
  // Here you would typically handle the request to declare an animal as sick
});

/* Put an animal up for adoption */
router.put('/:id/adopt', function(req, res, next) {
  // Here you would typically handle the request to put an animal up for adoption
});

/* GET top 50 animals */
router.get('/top50', function(req, res, next) {
  // Here you would typically handle the request to get the top 50 animals
});

/* Define an animal as child of another */
router.post('/:id/child/:parentId', function(req, res, next) {
  // Here you would typically handle the request to define an animal as a child of another
});

/* Check if animal has been vaccinated */
router.get('/:id/vaccinated', function(req, res, next) {
  // Here you would typically handle the request to check if an animal has been vaccinated
});

/* GET an auth token */
router.get('/auth/token', function(req, res, next) {
  // Here you would typically handle the request to get an auth token
});

/* transfer animal titles to another user */
router.post('/transfer/:id', function(req, res, next) {
  // Here you would typically handle the request to transfer animal titles to another user
});

module.exports = router;
