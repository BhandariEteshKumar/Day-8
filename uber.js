class Uber {
  constructor(estimatedTime, distance, carType, typeOfTravel) {
    this.estimatedTime = estimatedTime;
    this.distance = distance;
    this.carType = carType;
    this.typeOfTravel = typeOfTravel;
  }
  getUberPrice() {
    let price = this.estimatedTime * 2 + this.distance * 1;
    price = this.carType === "Mini" ? price * 1 : price * 2;
    price = this.typeOfTravel === "Shared" ? price * 2 : price * 3;
    return price;
  }
}
let uber1 = new Uber("120", "4", "Mini", "Shared");
let uber2 = new Uber("60", "2", "SUV", "Individual");
console.log(uber1.getUberPrice(), uber2.getUberPrice());

// Output : 488 732
