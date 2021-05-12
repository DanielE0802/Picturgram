require('dotenv').config()
const express = require('express');
const app = express();
const port = 3002;
require ('./config/config')

app.use(express.json())

app.listen(port,()=>{
    console.log(`listen in port ${port}`)
})