const axios = require("axios")

async function getPersonsByname(name){
    const { data } = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json");
    var peopleNames = {}, nameLimit=0 ;


    if(name === undefined || name === null || typeof name !== "string"){

        throw "Error: Name provided is either null or not defined";
    }
    
    if(name !== undefined && name !== null && typeof name === "string"){
        peopleNames["nameProvided"] = name;
        peopleNames["nameSearched"] = [];

        for(var i = 0; i < data.length; i++){  
            if(nameLimit >= 20 || nameLimit === ""){
               console.log("End of search results");
               break;
           }       
           if(data[i].firstName.toLowerCase().includes(name) || data[i].lastName.toLowerCase().includes(name)){
            peopleNames.nameSearched[nameLimit] = data[i];
            nameLimit++;
           }
        }
        return peopleNames;
    }else{

        throw "Error"
    }
}

module.exports = {
    getPersonsByname
};