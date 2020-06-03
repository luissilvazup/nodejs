const express = require('express');
const router = express.Router();
const {handleError} = require('../middlewares/handleErrors');
const AnimalController = require('../controllers/AnimalController');

//API Restful
router.get('/test', 
    (req, res, next) => {
        req.body = "primeira fn";
        next()
    }, (req, res, next) => {
        res.json(req.body);
    }
);
router.get('/animals', handleError(AnimalController.findAll));
router.get('/animals/:id', handleError(AnimalController.findById));
router.post('/animals', handleError(AnimalController.save));
router.patch('/animals/:id', handleError(AnimalController.update));
router.delete('/animals/:id', handleError(AnimalController.delete));

module.exports = router;

