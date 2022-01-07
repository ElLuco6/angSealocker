const Partnaire = require ('../model/partnaire');

exports.findPartnaire = (req, res, next) => {
    Partnaire.find()
      .then(Partnaire => res.status(200).json(Partnaire))
      .catch(error => res.status(400).json({ error }));
  };  
  
  exports.getPartner = async (id) =>{ // et asynchrone
    return axios.get("https://sea-locker-backend-dev.herokuapp.com/api/v1/partner/" + id)
    .then(data => {
      return data;
    })
    .catch( error =>{
      return error;
    });
  
    // // initialiser le loader
    // return $.ajax({
    //     // added data type
    //     url: "https://sea-locker-backend-dev.herokuapp.com/api/v1/partner/" + id,
    //     method: "GET",
    //     dataType: 'json',
    //     success: function (data) {
    //         // terminer le loader
    //         return data; // retourne la donnée !
    //     },
    //     error: function(){
    //         return error  // alert('error') 
    // }
    //     // ajouter un champ error, vas voir la doc
    //     // n'oublie pas de terminer le loader aussi dans le cas d'erreur et d'afficher un message d'erreur
    // });
  }
  

module.exports = router;

 

  
   

