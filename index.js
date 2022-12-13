const dotenv = require("dotenv") 
const Sequelize = require("sequelize") ; 
const connKey = require("./config/connect");


process.on("unhandledException" , (err) => {
    console.log ( "UNHANDLED EXCEPTION. Shutting Down...") ; 
    console.log ( err.name , err.message ) ; 
    process.exit(1) ; 
})

dotenv.config({path: "./.env"}) ; 



const sequelize = new Sequelize(connKey) ; 


sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');

}).catch((error) => {
   console.error('Unable to connect to the database: ', error);

});



const app = require("./app") ; 

const PORT = process.env.PORT || 3000 ; 


app.listen ( PORT , () => console.log ( `Server running on port ${PORT}`)) ; 


process.on("uncaughtRejection" , (err) => {
    console.log ( "UNCAUGHT REJECTION. Server is shutting down") ; 
    console.log ( err.name , err.message ) ; 

    server.close(() => process.exit(1) ) ; 
})



