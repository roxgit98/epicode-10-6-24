const form = document.querySelector("form");

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
