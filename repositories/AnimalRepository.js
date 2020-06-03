const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');

//CRUD - Create, Read, Update, Delete
exports.findAll = () => {
    return Animal.find().exec();
}

exports.save = (newAnimal) => {
    return new Animal(newAnimal).save();
}

exports.findById = (id) => {
    return Animal.findOne({_id: id}).exec();
}

exports.update = (estabelecimento) => {
    return Animal.findOneAndUpdate({_id: estabelecimento.id}, estabelecimento)
}

exports.delete = (id) => {
    Animal.deleteOne({_id: id}).exec();
}