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
      console.log("SUBSCRIPTION");
      this.id_partner = params['id'];
      console.log(this.id_partner);
      if (this.id_partner != undefined) this.getAllBoard(this.id_partner);
      
    });
  }

  ngOnDestroy() {
    this.subRoute.unsubscribe();
  }

  
  ngOnInit() {
    
    console.log("ON INIT");
    
    
    
    this.initSub();

    
    

    $(document).on('click', '#home_navbar', function () {
      
      $(this).find(".nav-link").toggle(500, "swing");
    });

    $(document).on('mouseleave', ".art_board", function () {
      $(this).find(".voir_div").slideToggle();
      /* $(this).find(".price").toggle(500,"swing"); */
      $(this).find('#spinner').toggle();

    });

    $(document).on('mouseenter', ".art_board ", function () {

      $(this).find(".voir_div").slideToggle();
      /*  $(this).find(".price").toggle(500,"swing"); */
    });
    console.log('yo');
    /* console.log(this.bio);
     this.checkDataLength(this.bio); 
     console.log(this.bio); */
    
     console.log(this.spinner);
     
    
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
          console.log(response);
          this.data = response;
          this.bio = this.data.partner.bio ;
         this.spinner = false;
         console.log(this.spinner);
         
        },
        (error) => {
          console.log(error);
        }
      );
  }

  clickBoards(i: number) {
    // alert(i);
     // $( '.data_brand_model') ;
     $(document).on('click', '.art_board', function () {
      let brand_model = $(this).find('.data_brand_model')[0].innerHTML;
      let rental_price = $(this).find('.price')[0].innerHTML;
      let image = $(this).find('.data_image').attr('src');
      let image2 = $(this).find('.data_image2').attr('src');
      let board_info = $(this).find('.board_info')[0].innerHTML;
     
     

      if (board_info != undefined)   $("#popup_board_info").html('<h2 class="append_element Caveat orange fs-2 mt-3 text-uppercase fst-italic">'+board_info + '</h2>');console.log(board_info);
      $("#popup_image2").html('<img src="' + image2 + '" alt="board_img" class="popup_img   m-2 " />');
      $("#popup_image1").html('<img src="' + image + '" alt="board_img"  class="popup_img   m-2 " />');
     
      $("#popup_brand_model").html('<h2 class="append_element vert Spartan fw-bold fs-1 fw-bold mt-5 text-uppercase">'+brand_model + '</h2>');
      $("#popup_board_price").html('<h2 class="append_element vert Caveat fs-2  price"><span class="Spartan fw-bolder">'+rental_price + '</span>/H</h2>');
     
       
   //style="height:90% ;object-fit:contain; width:100%"

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
      //$("#oneBoard_overlay").fadeOut(500);
      // $("#navbar").show();
    });

  }

  closePopup() {
    $(document).on('click', ".btnClose", function () {
      $('.append_element').remove();
      $("#overlay").fadeOut(500);
      $("#oneBoard_overlay").fadeOut(500);
      $("#navbar").show();
    });


  }


}


