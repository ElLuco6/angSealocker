
import { Partnaire } from '../model/User.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable()
export class UserService {
  static partnaireUser: any;
  public partnaire: Partnaire[] = [];
  public partnaireSubject = new Subject<Partnaire[]>(); 

  constructor(private httpClient: HttpClient) { }




  emitUsers() {
    this.partnaireSubject.next(this.partnaire.slice());
    console.log(this.partnaire);
  }

  /* addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  } 
  saveUser(newUser: User) {
    this.httpClient
      .post<any[]>('http://localhost:3000/user/addUser', newUser)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        () => {
          console.log('Erreur ! : ');
        }
      );
}*/
getAll() {
  this.httpClient
  
    .get<any[]>('http://localhost:3000/partnaire/findPartnaire')
    .subscribe(
      (response) => {
        this.partnaire = response;
        this.emitUsers();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}
}