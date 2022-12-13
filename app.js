const express = require("express") ; 


const app = express() ; 

app.use ( express.json()) ; 
app.use ( express.urlencoded({extended:false})) ; 



app.get ("/" , async ( req , res ) => {
    res.send (
        "GET Requests : <b> /incidents/get </b><br>" + 
        "POST Requests : <b> /incidents/add </b>" 

    ) ; 
})

app.use("/" , require("./routes/incident"))





module.exports = app ; 