const express = require('express')
const app = express()
const port = 3000

const { Sequelize, DataTypes } = require('sequelize');


// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('blogpostDB', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App listening at http://localhost:${port} !!!`))