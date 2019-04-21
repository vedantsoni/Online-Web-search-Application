const axios = require("axios");

async function getPersonsById(id){
    const { data } = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json");
    if(data === undefined){

        throw "Error: Data not defined ";
    }
    
    if(id === undefined || id === null){

        throw "Error: ID is not defined";
    }
    
    id = parseInt(id);
    if(id > 0 && id<= data.length && Number.isInteger(id)) {
        for(let i = 0; i < data.length; i++) {                 
           if(data[i].id === id){
                return data[i];            
           }                     
        }        
    }
    else{
        throw "Error: ID is note defined";
    }
}

module.exports = {
    getPersonsById
};