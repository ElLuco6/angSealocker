export var shopid = "60bf56b2ed1e480004a7a110";

// faire requete ajax avec la route ci dessous pour choper les info du shop et définir le shopid

export function getBoards() {
    $.ajax({
        // added data type

        url: "https://sea-locker-backend-dev.herokuapp.com/api/v1/partner/" + shopid,
        method: "GET",
        dataType: 'json',
        success: function (res) {
            $.each(res.boards, function (i) {



                //Loop articles
                /* $('#board_grid').append('<article class="card col-12 mb-5 col-xs-12 mx-2 col-sm-7 col-md-6 col-lg-3 art_board" >'
                 + '<div class="art_board_top position-relative">' + '<img  width="100%" class="card-img-top data_image" id="" src="' + res.boards[i].images[0] + '" />' + '<div id="article-' + i + '" class="voir_div  ">' + '<p class="voir_p  px-1 position-absolute bottom-0  text-center ">' + "quick look" + '</p>' + '</div>' + '</div> ' + '<div class="card-body .art_board_bot">' + '<div>' + '<p class="card-text name_art fw-bold popup_article_p">' + res.boards[i].brand + '</p>' + '<p class="shape card-text categorie_art fst-italic popup_article_p data_model">' + res.boards[i].shape + '</p>' + '</div>' + '<div>' + '<h3 class="price  price_art fst-italic popup_article_p">' + res.boards[i].rental_price + '€/h' + '</h3>' + '</div>' +  '</div>' + '</article>');
                
                $(".voir_p").hide(); */

                //NOUVEAUX display

                $('#home_display_boards').append('<div class="home_card col-2" style="width: 18rem;">' +
                    ' <img src="' + res.boards[i].images[0] + '" alt="planche">' +
                    ' <div>' +
                    '<h5 class="board_details_h2 fs-4 fw-bold">' + res.boards[i].size_ft + ' \'' + res.boards[i].size_inch + ' - ' + res.boards[i].shape + '</h5>' +
                    ' <p class="orange Caveat fs-3 fw-bold">' + res.boards[i].rental_price + '€/H</p>' +
                    ' </div>' +
                    '</div>')


            });
        },
        //mettre alert quand on arrive a passer le jquery
        error: function () {
            return (error) //alert(error)
        }

    });


}
export function displayLogo(data) {
    // différence entre une fonction synchrone

    //console.log($);   
    /*  $('#brand_section').append('<p class="col-1"></p>'+'<img id="brand_logo" alt="brand_logo" class="col-1" src="' + data.partner.logo + '" />' +
      '<div class="col-7">'+
         ' <h1  class=" fst-italic text-center"><span id="title">THEY ARE</span> <span id="brand_name "class="fw-bold fst-normal">'+ data.shops[0].title+'</span></h1>'+
         '<p class="col-1"></p>'+'</div>'+ 
          '<h2 class=" mt-1 text-center text-uppercase" id="brand_description">'+data.partner.bio +'</h2>'); ///// */


    //Nouveau display partner 
    $('#home_brand_info').append('<div class="d-flex justify-content-center">' +
        ' <div>' +
        ' <img src="' + data.partner.logo + '" alt="brand_logo" id="home_brand_logo" class="mt-4">'

        +
        ' <h1 class="d-flex flex-column  justify-content-center" id="home_title"> <span class="Caveat">THEY ARE</span><span class="fw-bold ">' + data.shops[0].title + '</span></h1>' +
        '</div>' +
        '<div class="d-flex flex-column-reverse">' +
        ' <p class=" orange fw-bold" id="brand_location"><img id="pointeur" src="assets/img/pointeur(1).png" alt="pointeur">ANGLET</p>' +
        ' </div>' +

        ' </div>' + '<h2 class="board_details_h2 fs-4 mb-0 text-uppercase fw-bold">' + data.partner.bio + '</h2>' +
        '<h3 class="gris Caveat mb-0">Board éco responsable en impression 3D</h3>')

}