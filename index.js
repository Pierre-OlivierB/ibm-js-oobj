// console.log("test");
class Chien {
  constructor(name, age, nature, scream) {
    this.name = name;
    this.age = age;
    this.nature = nature;
    this.scream = scream;
    this.quantity = 0;
  }
  description() {
    console.log(
      "Son nom " +
        this.name +
        " il a : " +
        this.age +
        " ans. C'est un " +
        this.nature +
        ". Il a mangé aujourd'hui " +
        this.quantity +
        " kg. Son aboiement : " +
        this.scream +
        ". "
    );
  }
  eat(meat) {
    this.quantity += meat;
    console.log(this.name + " mange " + meat + "kg");
  }
  qttEat() {
    console.log(this.name + " a mangé en tout " + this.quantity + "kg");
  }
  dogScream() {
    console.log(this.name + " : " + this.scream);
  }
}
var waf = new Chien("Rex", "12", "Berger", "waf");
// waf.eat(15);
// waf.dogScream();
// waf.description();
// waf.eat(5);
// waf.dogScream();
// waf.qttEat();
// waf.description();
class Car {
  constructor(mark, type, year, power) {
    this.mark = mark;
    this.type = type;
    this.year = year;
    this.power = power;
    this.vitesse = 0;
  }
  showCar() {
    console.log(
      "Marque de la voiture : " +
        this.mark +
        ". Modèle : " +
        this.type +
        ". Année de fabrication : " +
        this.year +
        ". Cylindre : " +
        this.power +
        (this.vitesse === 0
          ? ". La voiture est à l'arrêt"
          : ". La voiture avance de " + this.vitesse + "km/h")
    );
  }
}
var firstCar = new Car("Renault", "R5", 1990, 2);
var secondCar = new Car("Citroën", "C4", 2000, 4);
var thirdCar = new Car("Tesla", "L", 2015, 10);

firstCar.showCar();
