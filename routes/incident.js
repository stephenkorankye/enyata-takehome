const express = require("express") ; 
const { getIncident, addIncident } = require("../controllers/incident");
const router = express.Router() ; 




router.get ("/incidents/get" , getIncident ) ; 

router.post ("/incidents/add" , addIncident )


module.exports = router ; 