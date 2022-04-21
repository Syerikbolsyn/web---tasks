import { Component } from '@angular/core';

import {categories} from "../categories";
import { Router} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories = categories;

  constructor(private router: Router) {}
  gotoHome()  {
    this.router.navigate(['/home']);
  }

}
