

export class Guest{ 

    firstName: String;
    lastName : String;
    street   : String;
    city     : String;
    province : String;
    postalCode: String;
    emailAddress: String;
    phoneNumber: String;
    
    constructor(
        firstName: String,
        lastName : String,
        street   : String,
        city     : String,
        province : String,
        postalCode: String,
        emailAddress: String,
        phoneNumber: String
    ){ 

        this.firstName = firstName;
        this.lastName = lastName;
        this.street   = street;
        this.city     = city;
        this.province = province;
        this.postalCode = postalCode;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;

    }
}
