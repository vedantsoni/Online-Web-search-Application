const express = require("express");
const router = express.Router();
const data = require("../data");
const detailedData = data.details;

router.get("/:id", async (req, res) => {

    if(req.params.id === undefined || req.params.id === null || ((parseInt(req.params.id)) <=0 || (parseInt(req.params.id) > 500)) ){
      var error = [];
      error.push("ID provided is not valid");
      res.status(400).render("error", {
        errors : error, 
        hasErrors: true
      });  
    }
    else if(req.params.id !== undefined || req.params.id !== null || ((parseInt(req.params.id)) >0 || (parseInt(req.params.id) <= 500))){
      var peopleDetails = await detailedData.getPersonsById(req.params.id); 
      res.render("details", {
        peopleData : peopleDetails
      });  
    }
    else{
    res.status(404).json({errorMessage: "Entered person cannot be found"});
  }
});

module.exports = router;