const dotenv = require("dotenv") 


process.on("unhandledException" , (err) => {
    console.log ( "UNHANDLED EXCEPTION. Shutting Down...") ; 
    console.log ( err.name , err.message ) ; 
    process.exit(1) ; 
})


dotenv.config({path: "./.env"}) ; 

const app = require("./app") ; 


const PORT = process.env.PORT || 3000 ; 


app.listen ( PORT , () => console.log ( `Server running on port ${PORT}`)) ; 


process.on("uncaughtRejection" , (err) => {
    console.log ( "UNCAUGHT REJECTION. Server is shutting down") ; 
    console.log ( err.name , err.message ) ; 

    server.close(() => process.exit(1) ) ; 
})



