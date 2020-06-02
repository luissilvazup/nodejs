const express = require('express');
const router = express.Router();
const AnimalController = require('../controllers/AnimalController');

router.get('/animals', AnimalController.findAll);
router.get('/animals/:id', AnimalController.findById);
router.post('/animals', AnimalController.save);

module.exports = router;

