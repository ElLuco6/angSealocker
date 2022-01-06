const express = require("express");
const router = express.Router();
// const boutondCtrl = require('./controller/BoutonController');
const partnerCtrl = require('../frontend/src/scripts/partner');
const app = express();

// const setup = require('./public/scripts/setup.js');
// const cheerio = require('cheerio');

// var jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window; //?
// global.document = document;

// var $ = jQuery = require('jquery')(window);

 app.use(express.static(__dirname + 'public'));

//setup.setup();


  // var partnerId = "60bf56b2ed1e480004a7a110";
  // export it
  // exports.partnerId = partnerId;
 
  app.set('view engine', 'ejs');
  
 router.get('/:partnerId', async (req, res, next) => {
	 data = await partnerCtrl.getPartner(req.params.partnerId);
	 console.log(data);
	// partnerCtrl.displayLogo(data);
	 /* res.render('head.ejs', {
		data : data
		
	  }); */
	 /*  test = "2"
	  var data = {studentList: ["Johnson", "Mary", "Peter", "Chin-su"]};
	  res.render('coracle-beach', {students: data}); */
	 res.sendFile('new_home_page.html', { root: __dirname });

	// var html = fs.readFileSync(__dirname + 'index.html' + partnerId, 'utf8');
	
	
	
	 /* 
	 $('body').append('<p class="col-1"></p>'+'<img id="brand_logo" alt="brand_logo" class="col-1" src="' + data.partner.logo + '" />' +
	 '<div class="col-7">'+
		' <h1  class=" fst-italic text-center"><span id="title">THEY ARE</span> <span id="brand_name "class="fw-bold fst-normal">'+ data.shops[0].title+'</span></h1>'+
		'<p class="col-1"></p>'+'</div>'+ 
		 '<h2 class=" mt-1 text-center text-uppercase" id="brand_description">'+data.partner.bio +'</h2>'); */
		
// 	partnerCtrl.displayLogo(data) ; 
//  res.send(data.partner);
// console.log(partnerCtrl.displayLogo(data))
});
 

app.get('/test', function(req, res) {
	res.render('head.ejs');
  });

module.exports = router;


