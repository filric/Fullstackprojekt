const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    username: String,
    password: String
});

const Person = mongoose.model('Person', personSchema);


exports.createPerson = (username, password) => {
    var person = new Person({
        username: username,
        password: password
    })

    return person
}
exports.getAllInfo = async () =>{
    let infoList = await Person.find({

    })
    return infoList
}