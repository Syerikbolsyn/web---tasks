import { Component, OnInit } from '@angular/core';
import {products} from "../products";

@Component({
  selector: 'app-category-dress',
  templateUrl: './category-dress.component.html',
  styleUrls: ['./category-dress.component.css']
})
export class CategoryDressComponent implements OnInit {
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
