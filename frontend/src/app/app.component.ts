import { Component, OnInit } from '@angular/core';
//import {Board } from './model/Board.model';
import { Subject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
//import { data} from '../../../backend/index.js';
import { BoardService } from './service/BoardService';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angSealocker';
  public Boards : any
  //public boardSubject = new Subject<Board[]>();
 
 

  //data = data;


   constructor( private httpClient: HttpClient) { 
     
  } 

  /* emitBoards() {
    this.boardSubject.next(this.Boards.slice());
  } */

ngOnInit(){

  
    
    this.getAllBoard();
    
}
getAllBoard() {
  this.httpClient
  
    .get<any[]>('https://sea-locker-backend-dev.herokuapp.com/api/v1/partner/60bf56b2ed1e480004a7a110')
    
    .subscribe(
      (response) => {
        console.log(response);
        this.Boards = response;
        //console.log(Boards);
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}
 

}


