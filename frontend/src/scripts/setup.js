 
exports.setup = () => {

$(".voir_p").hide();

$(document).on('mouseleave', ".art_board", function () {
    $(this).find(".voir_p").slideToggle();
    $(this).find(".price").toggle('slide')

  });

  $(document).on('mouseenter', ".art_board ", function () {

    $(this).find(".voir_p").slideToggle();
    $(this).find(".price").toggle('slide');

  });

  $(document).on('click', '#footer_row', function(){
    $('#footer_block').slideToggle();
    console.log('yo');
  })

 
}
/* exports.displayLogo = (data) => { // différence entre une fonction synchrone
   

  $('#brand_section').append('<p class="col-1"></p>'+'<img id="brand_logo" alt="brand_logo" class="col-1" src="' + data.partner.logo + '" />' +
 '<div class="col-7">'+
    ' <h1  class=" fst-italic text-center"><span id="title">THEY ARE</span> <span id="brand_name "class="fw-bold fst-normal">'+ data.shops[0].title+'</span></h1>'+
    '<p class="col-1"></p>'+'</div>'+ 
     '<h2 class=" mt-1 text-center text-uppercase" id="brand_description">'+data.partner.bio +'</h2>')

} */
exports.spiner =() =>{
  $("#spiner").hide()
    
}

   