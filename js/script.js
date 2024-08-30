"use strict";

class coach {
  constructor(name, specialization, rating) {
    this.name = name;
    this.specialization = specialization;
    this.rating = rating;
  }
  displayInfo() {
    console.log(
      `Coach ${this.name}, Specialization ${this.specialization}, Raiting ${this.rating}`
    );
  }
}

const coach1 = new coach("John Green", "Box", 4.7);
const coach2 = new coach("Steve O'Connel", "Muay Thai", 4.9);

coach1.displayInfo();
coach2.displayInfo();
