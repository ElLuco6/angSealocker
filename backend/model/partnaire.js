const mongoose = require('mongoose');

const partnaireSchema = mongoose.Schema({
    logo: { type: String, required: true },
  shopTile: { type: String, required: true },
  bio: { type: Text, required: true },

  //Pas encore en BDD
  
  //description: { type: Text, required: true },
  //  location: { type: String, required: true },
  
 
});

module.exports = mongoose.model('partnaire', partnaireSchema);

