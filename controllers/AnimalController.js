const AnimalRepository = require('../repositories/AnimalRepository');

exports.findAll = async (req, res, next) => {
    const animals = await AnimalRepository.findAll();
    res.json(animals);
}

exports.findById = async (req, res, next) => {
    const animal = await AnimalRepository.findById(req.params.id);
    res.json(animal);
}

exports.save = async (req, res, next) => {
    const animal = await AnimalRepository.save(req.body);
    res.status(201).json(animal);
}

exports.update = async (req, res, next) => {
    const animalToUpdate = req.body;
    animalToUpdate.id = req.params.id;

    const animal = await AnimalRepository.update(animalToUpdate);

    res.status(202).json(animal);
}

exports.delete = async (req, res, next) => {
    await AnimalRepository.delete(req.params.id);
    res.status(200).json("Animal deleted :)");
}