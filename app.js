const express = require("express") ; 
const path = require("path")


const app = express() ; 

app.use ( express.json()) ; 
app.use ( express.urlencoded({extended:false})) ; 


app.use ( express.static (path.join(__dirname, "public"))) ; 
app.set ("view engine" , "ejs" ) ; 


app.get ("/" , async ( req , res ) => {
    res.send ( "MAKE GET AND POST REQUESTS")
})



module.exports = app ; 