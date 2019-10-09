/*
    This is the model for test data. It defines what type of data whill be accepted by our database and uses sequelize to create a new table of data
    in our database.
*/
module.exports = function (sequelize, DataTypes) {
    // returns information to our database in a table defined as 'table' and the key value pair we define here
    return sequelize.define('test', {
        testdata: DataTypes.STRING
    });
};