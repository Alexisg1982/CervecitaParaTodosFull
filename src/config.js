


const mongoose = require('mongoose');
require ('dotenv').config();
const database = process.env.DATABASE_URL;
const connect = async () => {
    try {
        await mongoose.connect(database, {
            
        });
        console.log('Database conectada');
    } catch (error) {
        console.log(error);
        connect();
    }
}

module.exports = mongoose;