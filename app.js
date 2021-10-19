const express = require('express')
const app = express()
const dotenv = require('dotenv')

const { Sequelize, DataTypes } = require('sequelize');
require('./models')

// middleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());



// api route
app.use('/api',require('./routes/api'))


dotenv.config()
app.get('/', (req, res) => res.send('Hello World! app'))

// 404 page
app.use((req, res, next) =>{
  res.status(404).send('404   404')
});




app.listen(process.env.PORT, () => console.log(`App listening at http://localhost:${process.env.PORT} !!!`))