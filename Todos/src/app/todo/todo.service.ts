import { Injectable } from '@angular/core';


const TODOS = [
  { title: 'Install Angular CLI' ,   idDone: true   } ,
  { title: 'Style app' ,   idDone: true   } ,
  { title: 'Finish srvice functionality' ,   idDone: false   } ,
  { title: 'Setup API' ,   idDone: false   } 
];

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor() { }

  get () {
    return new Promise( resolve => resolve(TODOS) );
  }
}
