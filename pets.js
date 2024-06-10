const form = document.querySelector("form");
const animali = [];

form.onsubmit = function (event) {
  event.preventDefault();

  console.log("submit");
  form.reset();
};

class Pet {
  constructor(petName, ownerName, species = [], breed = []) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  comparaPadrone(padrone) {
    if (this.ownerName === padrone.ownerName) {
      true;
    } else {
      false;
    }
  }
}

const petName = document.getElementById("petName").value;
const ownerName = document.getElementById("ownerName").value;
const species = document.getElementById("species").value;
const breed = document.getElementById("breed").value;

const newPet = new Pet(petName, ownerName, species, breed);

console.log(newPet);
