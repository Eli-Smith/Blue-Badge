require('dotenv').config();

const express = require('express'); 
const app = express(); 
const test = require('./controllers/testcontroller')
const authTest = require('./controllers/authtestcontroller')
const user = require('./controllers/usercontroller')
const sequelize = require('./db');

sequelize.sync()// tip: pass in {force: true} for resetting tables

app.use(express.json());

app.use(require('./middleware/headers'));
app.use('/api/test', function(req, res){
    res.send('This is data from the /api/test endpoint. It\'s from the server.');
});

app.use('/test', test);

app.use('/api/user', user);

app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);

app.listen(3000, function(){
    console.log('This is a new phrase! You should see the changes now!') 
});