const axios = require("axios") ; 
const sequelize = require("sequelize") ; 
const Incident = require("../models/incident");

let weather = [] ; 


const key = process.env.API_KEY ; 
let url = `https://api.openweathermap.org/data/2.5/weather?q=` ; 



exports.getIncident = async ( req , res  ) => {
    try{

        Incident.findAll()
            .then ( data => {
                res.status(200).json({data})
            })
            .catch ( err => {
                res.status(404).json({message : "Not found"})
            })

    }
    catch ( err ) {
        console.log ( "There was an error : " , err ) ; 
    }
    
}


exports.addIncident = async ( req , res ) => {

    try{

        console.log ( req.body ) ; 
        
        let errors = [] ; 

        let {
            client_id , 
            incident_desc , 
            city , 
            country ,  
        } = req.body ; 


        if ( !client_id ) errors.push("Client ID reuired") ; 
        if ( !incident_desc ) errors.push("Incident ID required") ; 
        if ( !city ) errors.push("City required") ; 
        if ( !country ) errors.push("Country required") ; 

        if ( errors.length > 0 ) {
            return res.status ( 200 ).json({success : false , message : errors })
        }
       

        //Fetch Data
        await axios.get (`${url}+${city}` , {
            params : {
                appid : key 
            }
        })
            .then ( ans => {
                const { data } = ans ; 

                weather.push({
                    client_id , 
                    incident_desc , 
                    city , 
                    country , 
                    weather_report : data 
                })

                Incident.create({
                    client_id , 
                    incident_desc , 
                    city , 
                    country , 
                    weather_report : data 
                }).then ( ans => {
                    console.log ( "Data Inserted ") ; 
                    res.status ( 200 ).json({success : true , message : "Saved Successfully"})

                })
                .catch ( err => {
                    console.log ( "Error inserting Data : " , err ) ; 
                    res.status ( 404 ).json({success : false , message : err })
                })


            })
            .catch ( err => {
                console.log ( "Error fetching data : " , err ) ; 
                res.status(404).json({message: `${city} Could not be found`})
            })


       
        


    }
    catch ( err ) {
        console.log ( "Error Posting : " , err ) ; 
        res.status ( 500 ).json({message : err })
    }
   
}


