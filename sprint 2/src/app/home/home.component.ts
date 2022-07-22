import { Component, OnInit } from '@angular/core';

import { Fruit } from '../models/fruit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fruits: Fruit[] = [
    { id: 1, name: 'apple', price: 2, unit: "1" },
    { id: 2, name: 'apricot', price: 3, unit: "2" },
    { id: 3, name: 'banana', price: 1, unit: "3" },
    { id: 4, name: 'dragonfruit', price: 2, unit: "1" },
    { id: 5, name: 'jackfruit', price: 4, unit: "2" },
    { id: 6, name: 'orange', price: 2, unit: "2" },
    { id: 7, name: 'pineapple', price: 2, unit: "1" }
  ];
  fruit: Fruit = {};
  saveFruit(fruit: Fruit) {
    console.log(fruit);
    this.fruits.push(fruit);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
