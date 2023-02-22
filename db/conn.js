const mongoose = require('mongoose');



async function main() {
    try {
        mongoose.set('strictQuery', true);

        await mongoose.connect('mongodb+srv://caua:123cauabobao@cluster0.zszqog1.mongodb.net/test');
        console.log('Conectado ao DB');
    } catch (error) {
        console.log(error);
    }
}

module.exports = main;