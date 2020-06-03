const express = require('express');
const router = express.Router();
const AnimalController = require('../controllers/AnimalController');

//API Restful
router.get('/animals', AnimalController.findAll);
router.get('/animals/:id', AnimalController.findById);
router.post('/animals', AnimalController.save);
router.patch('/animals/:id', AnimalController.update);
router.delete('/animals/:id', AnimalController.delete);

module.exports = router;

