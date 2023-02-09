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

// fourthCar.showCar();

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
// watch.showNewDate();
// watch.add(21, 28);
// watch.showNewDate();

const addTime = document.getElementById("addTime");
// console.log(addTime);
addTime.addEventListener("click", () => {
  watch.add(21, 28);
  watch.showNewDate();
});

// !--------------------------------------------------------
// *Train

// TODO: begin:Montp; get travellers, close doors; begin speed +10 foreach action; max : 150; action v++ but 150;cow on way ?stop + v=0: null;cow run, train,v++ => v =150; Target v = 150, 130, 100, 80, 60, 30, 5, 0; travellers get out;
class Train {
  constructor(
    vmax,
    addv,
    doorOpen,
    vLive,
    vsup,
    nmbTravellers,
    liveLocation,
    targetLocation
  ) {
    this.vmax = vmax;
    this.addv = addv;
    this.doorOpen = doorOpen;
    this.vLive = vLive;
    this.vsup = vsup;
    this.nmbTravellers = nmbTravellers;
    this.liveLocation = liveLocation;
    this.targetLocation = targetLocation;
  }
  openDoor() {
    this.doorOpen = true;
    console.log("Ouverture des portes !");
  }
  closeDoor() {
    this.doorOpen = false;
    console.log("Fermeture des portes ! ");
  }
  changeQtt(travellersPlus, travellersMinus) {
    if (this.doorOpen) {
      this.nmbTravellers += travellersPlus;
      this.nmbTravellers -= travellersMinus;
      console.log(
        "Le nombre de passager est maintenant de : " + this.nmbTravellers
      );
    } else if (!this.openDoor) {
      console.log("Les portes ne sont pas ouvertes!");
    }
  }
  leave() {
    if (this.doorOpen) {
      console.log("Le train a toujours les portes ouvertes.");
    } else if (!this.doorOpen) {
      console.log(
        "Le train quitte la gare de " + itin[this.liveLocation] + ". "
      );
    }
  }
  addSpeed(x) {
    // console.log(this.vLive + 10);
    this.vLive += this.addv * x;
    if (this.vLive > this.vmax) {
      this.vLive = this.vmax;
    }
    console.log("La vitesse est de : " + this.vLive + "km/h.");
  }
  stopTrain(x) {
    this.vLive -= this.vsup * x;
    if (this.vLive <= 0) {
      this.vLive = 0;
      return console.log("Le train est a l'arrêt");
    }
    console.log("La vitesse est de : " + this.vLive + "km/h.");
  }
  trainAtTarget() {
    this.targetLocation = this.liveLocation + 1;
    console.log(
      "Le train en provenance de " +
        itin[this.liveLocation] +
        " va entrer en gare de " +
        itin[this.targetLocation] +
        ". "
    );
  }
}
var itin = ["Montpellier", "Sète", "Toulouse"];
var tchoutchou = new Train(150, 10, false, 0, 10, 0, 0, itin);

console.log(tchoutchou);
console.log(
  `Le train en provenance de ${itin[0]} à destination de ${
    itin[itin.length - 1]
  } va bientot partir. Attention au départ.`
);
tchoutchou.openDoor();
tchoutchou.changeQtt(125, 0);
tchoutchou.closeDoor();
tchoutchou.leave();
tchoutchou.addSpeed(15);
console.log("Une vache sauvage apparait, vite, il faut freiner");
tchoutchou.stopTrain(15);
console.log("La vache a peur, elle se casse");
tchoutchou.addSpeed(15);
tchoutchou.stopTrain(0);
tchoutchou.stopTrain(2);
tchoutchou.stopTrain(3);
tchoutchou.stopTrain(2);
tchoutchou.stopTrain(2);
tchoutchou.stopTrain(3);
tchoutchou.stopTrain(2.5);
tchoutchou.stopTrain(0.5);
tchoutchou.trainAtTarget();
tchoutchou.openDoor();
tchoutchou.changeQtt(100, 95);
tchoutchou.closeDoor();
