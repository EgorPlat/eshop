import { Injectable } from '@angular/core';
import { orders } from '../home/order';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  list = orders;
  items = [
  {
   "name": "Булочка",
   "price": 50,
   "calories": 25
  }
];

  category(){
   
  }
  getList(){
    console.log(this.items);
  }

  makeList(name: string, price: number, calories: number){
    this.items.push({name, price, calories});
    console.log(this.items);
    //this.list.push({name, price, calories})
  }
  constructor() { }
}
