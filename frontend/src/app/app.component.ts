import { Component } from '@angular/core';
//import { data} from '../../../backend/index.js';
import { BoardService } from './service/boardService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angSealocker';



  //data = data;


  constructor( private BoardService: BoardService) { 
     
  } 

  fetchtAll(){
    
    this.BoardService.getAllBoard();
  }

}


