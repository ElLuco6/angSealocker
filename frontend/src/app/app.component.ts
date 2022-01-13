import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
//import {Board } from './model/Board.model';
import { Subject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
//import { data} from '../../../backend/index.js';
import { BoardService } from './service/BoardService';
import { HttpClient } from '@angular/common/http';
import { ready } from 'jquery';
import { ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent implements OnInit {
  title = 'angSealocker';
  //public data = new Board();
  public data : any;
  
  //public boardSubject = new Subject<Board[]>();
 
 

  //data = data;


   constructor( private route: ActivatedRoute,
    private httpClient: HttpClient) { 
     
  } 

  /* emitBoards() {
    this.boardSubject.next(this.Boards.slice());
  } */

ngOnInit(){
 // var partnerId = "60bf56b2ed1e480004a7a110";
 

var partnerId = this.route.snapshot.params['id'];
console.log(partnerId);
//this.data = this.getPartnerById(partnerId);
  
    
    this.getAllBoard();
   

    $(document).on('click', '#home_navbar', function(){
      console.log('y');
      $(this).find(".nav-link").toggle(500,"swing");
    });

    $(document).on('mouseleave', ".art_board", function () {
      $(this).find(".voir_div").slideToggle();
      /* $(this).find(".price").toggle(500,"swing"); */
      
      
    });
  
    $(document).on('mouseenter', ".art_board ", function () {
  
      $(this).find(".voir_div").slideToggle();
     /*  $(this).find(".price").toggle(500,"swing"); */
    });
   
    
    
}
/* getPartnerById(partnerId: number): void {
  const dats = this.data.find(data => data.id === id);
  if (data) {
      data.snaps++;
  } else {
      throw new Error('FaceSnap not found!');
  }
} */


getAllBoard() {
  
  this.httpClient
  
    .get<any[]>('https://sea-locker-backend-dev.herokuapp.com/api/v1/partner/60bf56b2ed1e480004a7a110')
    
    .subscribe(
      (response) => {
        console.log(response);
        this.data = response;
        //console.log(this.Boards);
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}
 

}


