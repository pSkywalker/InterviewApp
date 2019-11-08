import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GuestService } from 'src/app/services/guest.service';
import { Guest } from 'src/app/dataModels/EventGuest';


@Component({
  selector: 'app-event-input',
  templateUrl: './event-input.component.html',
  styleUrls: ['./event-input.component.css']
})
export class EventInputComponent implements OnInit {

  private guestInputForm;

  private firstNameError = false;
  private lastNameError = false;
  private streetError = false;
  private cityError = false;
  private postalCodeError = false;
  private provinceError = false;
  private emailAddressError = false;
  private phoneNumberError = false;

  private errorList: String[];

  private addedGuest: boolean = false;

  constructor( 
    private router: Router,
    private formBuilder: FormBuilder,
    private guestService : GuestService
  ) {

    this.guestInputForm = this.formBuilder.group({
      firstName: "",
      lastName: "",
      street: "",
      city: "",
      province: "",
      postalCode: "",
      emailAddress: "",
      phoneNumber: ""
    });

    this.errorList = [];

   }

  ngOnInit() {
  }

  login(){
    //this.router.navigate("/");
  }

  addGuest(formData){ 
    console.log( formData );

    let error:boolean = false;
    this.addedGuest = false;

    this.firstNameError = false;
    this.lastNameError = false;
    this.streetError = false;
    this.cityError = false;
    this.postalCodeError = false;
    this.provinceError = false;
    this.emailAddressError = false;
    this.phoneNumberError = false;

    this.errorList = [];

    if( formData.firstName.length < 1){ 
      this.errorList.push("First name is required");
      this.firstNameError = true;
      error = true;
    }
    if( formData.lastName.length < 1){ 
      this.errorList.push("Last name is required");
      this.lastNameError = true;
      error = true;
    }
    if( formData.street.length < 1 ){ 
      this.errorList.push("Street name is required");
      this.streetError = true;
      error = true;
    }
    if( formData.city.length < 1 ){ 
      this.errorList.push("City is required");
      this.cityError = true;
      error = true;
    }
    if( formData.postalCode.length < 1 ){ 
      this.errorList.push( "Postal code is required" );
      this.postalCodeError = true;
      error = true;
    }
    if( formData.province.length < 1 ){ 
      this.errorList.push( "Province is requred" );
      this.provinceError = true;
      error = true;
    }
    if( !( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( formData.emailAddress ) ) ){ 
      this.errorList.push("Email needs to be in: Email@provider.com format");
      this.emailAddressError = true;
      error = true;
    }
    if( formData.phoneNumber.length < 1 ){ 
      this.errorList.push( "Phone number is required" );
      this.phoneNumberError = true;
      error = true;
    }

    if( error!=true ){ 
      this.guestService.addGuest(
        new Guest(
          formData.firstName,
          formData.lastName, 
          formData.street,
          formData.city,
          formData.province,
          formData.postalCode,
          formData.emailAddress,
          formData.phoneNumber
        )
      );
      this.addedGuest = true;
    }
    


  }

}
