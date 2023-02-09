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
waf.eat(15);
waf.dogScream();
waf.description();
waf.eat(5);
waf.dogScream();
waf.qttEat();
waf.description();
