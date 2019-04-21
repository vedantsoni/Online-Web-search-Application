const searchRoutes = require("./search");
const detailedRoutes = require("./details");

const constructorMethod = app => { 
  app.use("/search", searchRoutes);  
  app.use("/details", detailedRoutes);  

  app.get("/", (req,res) => {
    res.render("main");
  });  
   
  app.use("*", (req, res) => {
    res.render("error");
  });
};

module.exports = constructorMethod;