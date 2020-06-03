const AnimalRepository = require('../repositories/AnimalRepository');
const httpStatus = require('http-status');

exports.findAll = async (req, res, next) => {
    const animals = await AnimalRepository.findAll();
    res.status(httpStatus.OK).json(animals);
}

exports.findById = async (req, res, next) => {
    const animal = await AnimalRepository.findById(req.params.id);
    res.status(httpStatus.OK).json(animal);
}

exports.save = async (req, res, next) => {
    const animal = await AnimalRepository.save(req.body);
    res.status(httpStatus.CREATED).json(animal);
}

exports.update = async (req, res, next) => {
    const animalToUpdate = req.body;
    animalToUpdate.id = req.params.id;

    const animal = await AnimalRepository.update(animalToUpdate);

    res.status(httpStatus.OK).json(animal);
}

exports.delete = async (req, res, next) => {
    await AnimalRepository.delete(req.params.id);
    res.status(httpStatus.OK).json();
}