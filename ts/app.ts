// let age:string = 22;
// let age:any = 22;
// let age:string | number = 22;

// age = 'Hello'

//
// function mulpiplier(a: number, b: number): number {
//   return a * b;
// }

// function mulpiplier(a: number, b?: number): void {
//   console.log(a * b);
// }
//
// mulpiplier(10);
// //
// // console.log(number);
//
// class Car {
//   protected year: number;
//   private producer: string;
//   public power: number = 200;
//
//   constructor(year: number, producer: string) {
//     this.year = year;
//     this.producer = producer;
//   }
//
//   protected changePower(newPower: number): void {
//     this.power = newPower;
//   }
//
//   private privateTest() {
//     console.log('TEST')
//   }
// }
//
// class SuperCar extends Car {
//   public color: string;
//
//   constructor(year: number, producer: string, color: string) {
//     super(year, producer);
//     this.color = color;
//   }
//
//   changePower() {
//
//   }
//
//   privateTest() { // Will throw an error
//
//   }
// }
//
// const car1 = new Car(2008, 'Vaz');
// const superCar = new SuperCar(2000, 'Mazda', 'red');
//
// console.log(car1);
// console.log(superCar);
//
// console.log(car1);


// const user = {
//   name: 'Viktor',
//   laptop: {
//     model: 'Dell',
//     memory: 16
//   },
//   car: {
//     year: 2007
//   },
//   bike: {
//     price: 9999
//   }
// }
//
// // console.log(user && user.bike && user.bike.price && user.bike.price.currency);
// console.log(user?.bike?.price?.currency); //Elvis

let names: string[] = ['Vova', 'Anton', 'Dimas'];
let names2: Array<string | number> = ['Vova', 'Anton', 'Dimas'];

// names = ['Khrystyna'];
// names = 33


// ENUM

enum EGenders {
  MALE = 'male',
  FEMALE = 'female',
}

interface ICar {
  color: string
}

interface IUser {
  age: number,
  name: string,
  gender: EGenders,
  wife?: boolean,
  cars?: [ICar],
  goWork: Function
}


function userLogger(users: Array<IUser>): void {
  users.forEach((user) => {
    user.cars?.forEach(car => { // Skip loop when array is not present
      console.log(car.color);
    })
  })
}


let ivan: IUser = {
  age: 22,
  name: 'Ivan',
  wife: false,
  gender: EGenders.MALE,
  goWork: () => {}
}

let viktor: Partial<IUser> = { // Important
  age: 25,
  name: 'Viktor'
}

userLogger([ivan]);

// KEYOF
const keys: Array<keyof IUser> = ["age", "cars", "goWork", "name", "wife"]

function getValueOfKey(key: keyof IUser): void {
  console.log(ivan[key])
}

getValueOfKey('wife')


// PROMISE example from smak.shop
// createTokenPair(tokenObject: Partial<IAccessToken>): Promise<IAccessToken> {
//   const tokensToCreate = new AccessTokenModel(tokenObject);
//
//   return tokensToCreate.save();
// }


// ABSTRACT CLASS

abstract class ACar {
  wheels: number;
  power: number;

  constructor(wheels: number, power: number) {
    this.wheels = wheels;
    this.power = power;
  }

  ride(): void {
    console.log(`Ride with ${this.power * 2} km\h`)
  }
}

// const car = new ACar()

class Car extends ACar{
  color: string = 'white';

  constructor(wheels: number, power: number, color?: string) {
    super(wheels, power);
  }
}

const bibizika = new Car(4, 100);
bibizika.ride();


// клас Верховна рада
// поля:
// масив фракцій
// методи:
// додати\видалити фракцію
// вивести всі фракції
// вивести конкретну фракцію
// додати\видалити депутата з фракції
// вивести всіх хабарників фракції
// вивести найбільшого хабарника у фрації
// вивести найбільшого хабарника верховної ради
// вивести фсіх депутатів фракції
