import { Component, OnInit, OnDestroy, Input,ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

import { BoardService } from './service/BoardService';
import { HttpClient } from '@angular/common/http';
import { ready } from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { faCoffee, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})


export class AppComponent implements OnInit, OnDestroy {
  public isReadMore: boolean = false;
  public spinner: boolean  = true;
  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight; 
  faCoffee = faCoffee;
  public title = 'angSealocker';
  public currentMsgToChild1 = 'aa';
  public data: any;
  public bio: string;
  public subRoute: Subscription;
  private id_partner: string;



  constructor(private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient) { }

 
  initSub() {
    this.subRoute = this.activatedRoute.queryParams.subscribe((params: any) => {
     
      this.id_partner = params['id'];
      
      if (this.id_partner != undefined) this.getAllBoard(this.id_partner);
      
    });
  }

  ngOnDestroy() {
    this.subRoute.unsubscribe();
  }

  
  ngOnInit() {
    
    
    
    
    
    this.initSub();

    
    

    $(document).on('click', '#home_navbar', function () {
      
      $(this).find(".nav-link").toggle(500, "swing");
    });

    $(document).on('mouseleave', ".art_board", function () {
      $(this).find(".voir_div").slideToggle();
      
      $(this).find('#spinner').toggle();

    });

    $(document).on('mouseenter', ".art_board ", function () {

      $(this).find(".voir_div").slideToggle();
      
    });
    
     
    
  }


  checkDataLength(bio: string) {
    if(this.bio != undefined)console.log('string-length', bio.length);

    this.isReadMore = (bio.length > 60);
  }



  getAllBoard(id: string) {

    this.httpClient

      .get<any[]>('https://sea-locker-backend-dev.herokuapp.com/api/v1/partner/' + id)

      .subscribe(
        (response) => {
         
          this.data = response;
          this.bio = this.data.partner.bio ;
         this.spinner = false;
         console.log(this.data);
         
        },
        (error) => {
          
        }
      );
  }

  clickBoards(i: number) {
    
     $(document).on('click', '.art_board', function () {
      let brand_model = $(this).find('.data_brand_model')[0].innerHTML;
      let rental_price = $(this).find('.price')[0].innerHTML;
      let image = $(this).find('.data_image').attr('src');
      let image2 = $(this).find('.data_image2').attr('src');
      let board_info = $(this).find('.board_info')[0].innerHTML;
       let board_derive = $(this).find('.board_derive')[0].innerHTML;
      let brand = $(this).find('.data_brand')[0].innerHTML;
      let board_description = $(this).find('.board_description')[0].innerHTML; 
     

      if (board_info != undefined)   $("#popup_board_info").html('<h2 class="append_element Spartan vert fs-3 mt-3 text-uppercase fst-italic">'+board_info + '</h2>');
      $("#popup_image2").html('<img src="' + image2 + '" alt="board_img" class="popup_img   m-2 " />');
      $("#popup_image1").html('<img src="' + image + '" alt="board_img"  class="popup_img   m-2 " />');
       $("#popup_brand").html('<h2 class="append_element Spartan vert fs-3 mt-3 text-uppercase fst-italic">'+brand + '</h2>');
      $("#popup_derive").html('<h2 class="append_element Spartan vert fs-3 mt-3 text-uppercase fst-italic">'+board_derive + '</h2>');
      $("#popup_description").html('<p class="append_element Spartan vert fs-3 mt-3 text-uppercase fst-italic">'+board_description + '</p>'); 
     
      $("#popup_brand_model").html('<h2 class="append_element vert Spartan fw-bold fs-1 fw-bold  text-uppercase" id="popup_board_model">'+brand_model + '</h2>');
      $("#popup_board_price").html('<h2 class="append_element vert Caveat fs-2  price"><span class="Spartan fw-bolder">'+rental_price + '</span>/H</h2>');
     
       
   

     });
     $(document).on('click', ".btnClose", function () {
      let brand_model = $(this).find('.data_brand_model')[0];
      
      $(".data_brand_model").html(brand_model);
     
      $("#overlay").fadeOut(500);
      $('.append_element').remove();
     
      
    });
     
 
    $("#overlay").fadeIn(500);


  }
  
  

  diplayNav() {
    $(document).on('click', "#home_navbar", function () {


      $("#.nav-link").toggle(500, "swing");
      $('#home_nav_row').toggle(500, "swing")
      
    });

  }

  closePopup() {
    $(document).on('click', ".btnClose", function () {
      $('.append_element').remove();
      $("#overlay").fadeOut(500);
      $("#overlayMobile").fadeOut(500);
      $("#oneBoard_overlay").fadeOut(500);
      $("#navbar").show();
    });


  }
  mobilePopup(){
    $("#overlayMobile").fadeIn(500);
  }


}


