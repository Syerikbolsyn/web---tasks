import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { AppComponent } from './app.component';
import {CategoryComponent} from "./category/category.component";
import {MenuComponent} from "./menu/menu.component";


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CategoryComponent },
    ])
  ],
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductListComponent,
    MenuComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
