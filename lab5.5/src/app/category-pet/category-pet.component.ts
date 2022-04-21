import { Component, OnInit } from '@angular/core';
import {products} from "../products";

@Component({
  selector: 'app-category-pet',
  templateUrl: './category-pet.component.html',
  styleUrls: ['./category-pet.component.css']
})
export class CategoryPetComponent implements OnInit {
  products = products;
  show = false;
  share() {
    console.log('The product has been shared!');
  };

  change(): void {
    this.show = !this.show;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
