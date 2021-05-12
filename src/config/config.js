require('dotenv').config()
const mongoose = require ('mongoose');
const {DB_USER, DB_PASSWORD} = process.env

let MONGO_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@prueba1.ugljf.mongodb.net/register`

mongoose.connect(MONGO_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log(`Database is connected`))
.catch(err => console.log(err))