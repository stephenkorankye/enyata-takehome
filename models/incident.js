const { Sequelize, DataTypes } = require("sequelize");



const { DB_USERNAME , DB_HOST , DB_PASSWORD } = process.env ; 

// const sequelize = new Sequelize(
//     'defaultdb', 
//     DB_USERNAME , 
//     DB_PASSWORD , 
//     {
//         host : DB_HOST , 
//         dialect : "postgres"
//     }  
// )

const sequelize = new Sequelize("postgresql://doadmin:AVNS_0Gvtyayb90bkTjgAXCj@db-postgresql-fra1-38922-do-user-13073615-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=no-verify")


sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});


const Incident = sequelize.define("incidents" , {
    client_id : {
        type : DataTypes.INTEGER , 
        allowNull : false 
    } , 
    incident_desc : {
        type : DataTypes.STRING , 
        allowNull: false 
    } , 
    city : {
        type : DataTypes.STRING , 
        allowNull : false 
    } , 
    country : {
        type : DataTypes.STRING , 
        allowNull : false , 
    } , 
    weather_report: {
        type : DataTypes.JSON
    }

})



sequelize.sync().then(() => {
    console.log('Incident table created successfully!'); 


}).catch((error) => {
    console.error('Unable to create table : ', error);
 });

module.exports = Incident ; 