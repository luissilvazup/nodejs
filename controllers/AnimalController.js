const AnimalRepository = require('../repositories/AnimalRepository');

exports.findAll = (req, res, next) => {
    const animals = AnimalRepository.findAll();
    console.log(animals);
    res.json("findAll");
}

exports.save = (req, res, next) => {
    res.json("save");
}

exports.findById = (req, res, next) => {
    res.json("findById");
}