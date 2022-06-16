const mongoose = require('mongoose');

const connectToDB =  () =>  mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('Connected to DB'));

module.exports = connectToDB;