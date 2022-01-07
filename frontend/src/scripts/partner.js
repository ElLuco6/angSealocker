const axios = require('axios');
//const fs = require('fs');


// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document; 

// var $ = jQuery = require('jquery')(window); 
exports.displayLogo =  (data) =>{
//export function displayLogo(data) {
 // différence entre une fonction synchrone
   
            //console.log($);   
          /*  $('#brand_section').append('<p class="col-1"></p>'+'<img id="brand_logo" alt="brand_logo" class="col-1" src="' + data.partner.logo + '" />' +
            '<div class="col-7">'+
               ' <h1  class=" fst-italic text-center"><span id="title">THEY ARE</span> <span id="brand_name "class="fw-bold fst-normal">'+ data.shops[0].title+'</span></h1>'+
               '<p class="col-1"></p>'+'</div>'+ 
                '<h2 class=" mt-1 text-center text-uppercase" id="brand_description">'+data.partner.bio +'</h2>'); ///// */
              
              /*   fs.readFile('results.json', function (err, data) {
                  var json = JSON.parse(data)
                  json.push('search result: ' + currentSearchResult)
              
                  fs.writeFile("results.json", JSON.stringify(json))
              })
              fs.readFile('results.json', function (err, data) {
                var json = JSON.parse(data)
                json.push('search result: ' + data)
            
                fs.writeFile("results.json", JSON.stringify(data))
            }) */
                //Nouveau display partner 
               /* $('#home_brand_info').append('<div class="d-flex justify-content-center">' +
              ' <div>'+
                  ' <img src="'+ data.partner.logo +'" alt="brand_logo" id="home_brand_logo" class="mt-4">'

                  +' <h1 class="d-flex flex-column  justify-content-center" id="home_title"> <span class="Caveat">THEY ARE</span><span class="fw-bold ">'+ data.shops[0].title+'</span></h1>'+
               '</div>'+
              '<div class="d-flex flex-column-reverse">'+
                  ' <p class=" orange fw-bold" id="brand_location"><img id="pointeur" src="assets/img/pointeur(1).png" alt="pointeur">ANGLET</p>'+
              ' </div>'+

          ' </div>'+'<h2 class="board_details_h2 fs-4 mb-0 text-uppercase fw-bold">'+data.partner.bio +'</h2>'+
      '<h3 class="gris Caveat mb-0">Board éco responsable en impression 3D</h3>')  */
          
}

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

 