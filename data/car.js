class Car {
 #brand;
 #model;
 speed;
 isTrunkOpen;

 constructor(CarDetails){
  this.#brand=CarDetails.brand;
  this.#model=CarDetails.model;
  this.speed=0;
  this.isTrunkOpen=false;
 }
 
 displayInfo(){
  console.log(`${this.#brand} ${this.#model} ${this.speed}`);
 }

 go(){
  if(this.speed<245){
    this.speed+=5;
  }
 }

 brake(){
  if(this.speed>=5){
  this.speed-=5;
  }
 }

 openTrunk(){
  if(this.speed===0){
  this.isTrunkOpen=true;
  }
 }

 closeTrunk(){
  this.isTrunkOpen=false;
 }

}

class RaceCar extends Car{
  accleration;

  constructor(CarDetails){
    super(CarDetails);
    this.accleration=CarDetails.accleration;
  }

  go(){
    if(this.speed<=295){
      this.speed+=this.accleration;
    }
  }
}

const car1=new Car('Buggati','Veyron');
const car2=new Car('Mclaren','P1');

console.log(car1);
console.log(car2);

car1.go();
car1.go();
car1.displayInfo();
car1.brake();
car1.brake();
car1.openTrunk();
car2.openTrunk();
console.log(car1.isTrunkOpen);

const mc=new RaceCar({
  brand:'mclaren',
  model:'Fuck 1',
  accleration:20
})

mc.go();
console.log(mc);