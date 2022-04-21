import { Component, OnInit } from '@angular/core';
import {products} from "../products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
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
