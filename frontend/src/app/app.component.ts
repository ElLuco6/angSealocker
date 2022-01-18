import { Component, OnInit, OnDestroy, Input,ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
//import {Board } from './model/Board.model';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
//import { data} from '../../../backend/index.js';
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
  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight; 
  faCoffee = faCoffee;
  public title = 'angSealocker';

  public data: any;
  public test: string;
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
    
    //this.test()
    
    console.log("ON INIT");
    
    this.setupNav();
    // var partnerId = "60bf56b2ed1e480004a7a110";
    //this.data = this.getPartnerById(partnerId);
    this.initSub();

    //console.log(this.data)
    

    $(document).on('click', '#home_navbar', function () {
      console.log('y');
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
     
     this.checkDataLength(this.test); 
    console.log(this.test);
  }
  checkDataLength(test: string) {
    if(this.test != undefined)console.log('string-length', test.length);

    this.isReadMore = (test.length > 60);
  }



  getAllBoard(id: string) {

    this.httpClient

      .get<any[]>('https://sea-locker-backend-dev.herokuapp.com/api/v1/partner/' + id)

      .subscribe(
        (response) => {
          console.log(response);
          this.data = response;
          this.test = this.data.partner.bio ;
          console.log(this.test)
         
        },
        (error) => {
          console.log(error);
        }
      );
  }

  clickBoards(i: number) {
    // alert(i);
    $("#overlay").fadeIn(500);;


  }
  setupNav() {
    $('#spinner').attr('style', 'display: none !important');
    console.log('cbon');

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

      $("#overlay").fadeOut(500);
      $("#oneBoard_overlay").fadeOut(500);
      $("#navbar").show();
    });


  }


}


