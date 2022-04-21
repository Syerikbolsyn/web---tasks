import { Component, OnInit } from '@angular/core';
import {products} from "../products";

@Component({
  selector: 'app-category-game',
  templateUrl: './category-game.component.html',
  styleUrls: ['./category-game.component.css']
})
export class CategoryGameComponent implements OnInit {
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
