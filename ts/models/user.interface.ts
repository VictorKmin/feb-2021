import {EGenders} from "./genders.enum";
import {ICar} from "./car.interface";

export interface IUser {
  age: number,
  name: string,
  gender: EGenders,
  wife?: boolean,
  cars?: [ICar],
  goWork: Function
}
