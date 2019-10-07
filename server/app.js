let express = require('express'); 
let app = express(); 
let test = require('./controllers/testcontroller')

       
app.listen(3000, function(){
    console.log('This is a new phrase! You should see the changes now!') //5
});


app.use('/api/test', function(req, res){
    res.send('This is data from the /api/test endpoint. It\'s from the server.');
});

app.use('/test', test);