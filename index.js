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
// !----------------------------------------------
// *Car
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
  forward(count) {
    this.vitesse += count;
  }
}
function buildCar(mark, sign, year, cyl) {
  return new Car(mark, sign, year, cyl);
}
var firstCar = new Car("Renault", "R5", 1990, 2);
var secondCar = new Car("Citroën", "C4", 2000, 4);
var thirdCar = new Car("Tesla", "L", 2015, 10);

var fourthCar = buildCar("Toyota", "Yaris", 2005, 10);

fourthCar.showCar();

// firstCar.showCar();
// firstCar.forward(10);
// firstCar.showCar();

// !-------------------------------------------
// *Horloge
class Clock {
  constructor() {
    this.date = new Date();
    this.sec = this.date.getSeconds();
    this.min = this.date.getMinutes();
    this.hour = this.date.getHours();
  }
  add(min, sec) {
    this.sec += sec;
    if (this.sec >= 60) {
      min += 1;
      this.sec -= 60;
    }
    this.min += min;
    if (this.min >= 60) {
      this.min -= 60;
      this.hour++;
    }
  }
  showNewDate() {
    console.log(this.hour + "H " + this.min + "min " + this.sec + "s.");
  }
}
var watch = new Clock();
watch.showNewDate();
watch.add(21, 28);
watch.showNewDate();

const addTime = document.getElementById("addTime");
// console.log(addTime);
addTime.addEventListener("click", () => {
  watch.add(21, 28);
  watch.showNewDate();
});

// !--------------------------------------------------------
// *
