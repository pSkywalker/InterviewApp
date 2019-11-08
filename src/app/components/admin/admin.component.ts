import { Component, OnInit } from '@angular/core';

import { GuestService } from 'src/app/services/guest.service';
import { Guest } from 'src/app/dataModels/EventGuest';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private allGuests;

  constructor(
    private guestService: GuestService
  ) {
      this.allGuests = guestService.getGuests();
   }

  ngOnInit() {
  }

  removeGuest(index){ 
    this.guestService.removeGuest( index );
  }

}
