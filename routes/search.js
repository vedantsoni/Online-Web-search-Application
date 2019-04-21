
const express = require("express");
const router = express.Router();
const data = require("../data");
const dataSearch = data.search;

router.post("/", async (req, res) => {

    if(req.body.personName === undefined || req.body.personName === "" || req.body.personName === null){
      let error = [];
      error.push("Provide some input");
      res.status(400).render("error", {
        errors : error, 
        hasErrors: true
      });  
    }

    else if(req.body.personName !== undefined || req.body.personName !== "" || req.body.personName !== null){      
      let people = await dataSearch.getPersonsByname(req.body.personName); 
      res.render("search", {
        search : people
      });  
    }
   else{   
    res.status(404).json({errorMessage: "Entered person cannot be found"});    
  }
});

module.exports = router;