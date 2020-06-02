const Animal = require('../model/Animal')
const animalModel = new Animal();

exports.findAll = () => {
    return animalModel.save();
}