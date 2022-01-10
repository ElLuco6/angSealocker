import {Board } from '../model/Board.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable()
export class BoardService {
  static saveBoard: any;
  private boards: Board[] = [];
  public boardSubject = new Subject<Board[]>();

  constructor(private httpClient: HttpClient) { }





  emitBoards() {
    this.boardSubject.next(this.boards.slice());
  }

 /*  addBoard(board: Board) {
    this.boards.push(board);
    this.emitBoards();
  }
  saveBoard(newBoard: Board) {
    this.httpClient
      .post<any[]>('http://localhost:3000/board/addBoard', newBoard)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        () => {
          console.log('Erreur ! : ');
        }
      );
} */
getAllBoard() {
  this.httpClient
  
    .get<any[]>('https://sea-locker-backend-dev.herokuapp.com/api/v1/partner/60bf56b2ed1e480004a7a110')
    .subscribe(
      (response) => {
        console.log(response);
        this.boards = response;
        this.emitBoards();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}
}
