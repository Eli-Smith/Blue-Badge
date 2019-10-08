require('dotenv').config();

let express = require('express'); 
let app = express(); 
let test = require('./controllers/testcontroller')
let user = require('./controllers/usercontroller')
let sequelize = require('./db');

sequelize.sync()// tip: pass in {force: true} for resetting tables

app.use(express.json());
       


app.use('/api/test', function(req, res){
    res.send('This is data from the /api/test endpoint. It\'s from the server.');
});

app.use('/test', test);

app.use('/api/user', user);

app.listen(3000, function(){
    console.log('This is a new phrase! You should see the changes now!') 
});