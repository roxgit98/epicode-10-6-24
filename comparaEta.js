class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  comparaEta(verificaEta) {
    if (this.age > verificaEta.age) {
      console.log(this.age, "è più vecchio di", verificaEta.age);
    } else {
      console.log(verificaEta.age, "è più vecchio di", this.age);
    }
  }
}

const utente1 = new User("aldo", "baglio", 42, "milano");
const utente2 = new User("michele", "micheluzzi", 41, "palermo");

console.log(utente1.comparaEta(utente2));
