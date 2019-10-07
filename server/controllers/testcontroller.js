let express = require('express'); //1
let router = express.Router(); //2

//3    //4 //5           //6
router.get('/', function (req, res){
     //7
    res.send('Hey!! This is a test route!');
});

router.get('/about', function( req, res){
    res.send('This is my about route')
});

router.get('/contact', function( req, res){
    let contactObject = {
        name: 'Eli',
        number: 5555555555,
        age: 26
    };
    res.send(contactObject)
});

router.get('/projects', function(req, res){
    let projectsArr = ['Project1', 'Porject2', 'Project3'];
    res.send(projectsArr)
});

router.get('/mycontacts', function(req, res){
    let myContacts = [
        {
            name: 'Joe', 
            num: 333
        }, 
        {
            name: 'Jane', 
            num: 444
        }];
    res.send(myContacts);
})

//8
module.exports = router;