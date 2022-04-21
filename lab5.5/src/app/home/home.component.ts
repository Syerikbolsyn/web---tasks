import { Component, OnInit } from '@angular/core';
import {products} from "../products";
import {categories} from "../categories";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories = categories;

  constructor() { }

  ngOnInit(): void {
  }
  gotoHome()  {

  }


}
