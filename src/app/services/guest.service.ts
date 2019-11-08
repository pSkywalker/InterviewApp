import { Injectable } from '@angular/core';
import {Guest} from "../dataModels/EventGuest";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  guests: Guest[] = [
    new Guest( "Martin" , "Smith", "Smith Drive", "Toronto ","on", "123 234", "smith@smithEmail.com", '111-123-1123'),
    new Guest( "Alex" , "Smith", "Alex Drive", "Toronto","on", "443 234", "alex@smithEmail.com", '111-234-5435'),
    new Guest( "Jane" , "Smith", "Jane Drive", "Ottowa ","on", "543 234", "jane@smithEmail.com", '111-245-2345'),
    new Guest( "Janice" , "Smith", "Toronto Drive", "Toronto ","on", "543 234", "janice@smithEmail.com", '111-563-2345'),
  ];

  constructor() { }

  addGuest( guest: Guest ) { 
    this.guests.push( guest );
  }

  getGuests(){ 
    return this.guests;
  }

  removeGuest( index ){ 
    this.guests.splice( index, 1 );
  }

}
