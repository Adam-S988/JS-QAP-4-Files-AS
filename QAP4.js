const motelCustomer = {
  firstName: "Sally",
  lastName: "Sparrow",
  birthDate: "1988-03-02",
  gender: "female",
  roomPrefrences: ["double bed", "smoke free"],
  paymentMethod: "credit card",
  mailingAddress: {
    streetAddress: "18 Duckworth St.",
    city: "St. John's",
    province: "Newfoundland and Labrador",
    postalCode: "A1B 4F5",
    country: "Canada",
  },
  phoneNumber: "(709) 867-5309",
  checkInDate: "2024-03-22",
  checkOutDate: {
    year: 2024,
    month: 3,
    day: 29,
  },

  calculateAge: function () {
    const today = new Date();
    const birthDate = new Date(this.birthDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const diffMonths = today.getMonth() - birthDate.getMonth();
    if (
      diffMonths < 0 ||
      (diffMonths === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  },

  calculateDurationOfStay: function () {
    const checkIn = new Date(this.checkInDate);
    const checkOut = new Date(
      this.checkOutDate.year,
      this.checkOutDate.month - 1,
      this.checkOutDate.day
    );
    const oneDays = 24 * 60 * 60 * 1000;
    const duration = Math.round(Math.abs((checkOut - checkIn) / oneDays));
    return duration;
  },

  motelCustomerDescription: function () {
    const age = this.calculateAge();
    const duration = this.calculateDurationOfStay();
    return `
       Customer Name: ${this.firstName} ${this.lastName}
       Birth Date: ${this.birthDate}
       Age: ${age}
       Gender: ${this.gender}
       Room Prefrences: ${this.roomPrefrences}
       Payment Method: ${this.paymentMethod}
       Mailing Address: ${this.mailingAddress.streetAddress} 
                        ${this.mailingAddress.city}, ${this.mailingAddress.province}  ${this.mailingAddress.postalCode} 
                        ${this.mailingAddress.country}
       Phone Number: ${this.phoneNumber}
       Check In Date: ${this.checkInDate}
       Check Out Date: ${this.checkOutDate.year}-${this.checkOutDate.month}-${this.checkOutDate.day}
       Duration of Stay: ${duration} days
  
  ${this.firstName} ${this.lastName} is a ${age} year old ${this.gender} who is a checking into a motel with a ${this.roomPrefrences[1]} room that contains a ${this.roomPrefrences[0]}. She wants to check in on ${this.checkInDate} and stay for ${duration} days, before checking out on ${this.checkOutDate.year}-${this.checkOutDate.month}-${this.checkOutDate.day}. Her full mailing address is ${this.mailingAddress.streetAddress}, ${this.mailingAddress.city}, ${this.mailingAddress.province}, postal code ${this.mailingAddress.postalCode}, in ${this.mailingAddress.country}. Her birthdate listed is ${this.birthDate}. She will be paying by ${this.paymentMethod}.
       
       `;
  },
};

const customerDescription = motelCustomer.motelCustomerDescription();
console.log(customerDescription);
