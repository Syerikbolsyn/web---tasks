import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryComponent} from "./category/category.component";
import {ProductListComponent} from "./product-list/product-list.component";

import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path: 'home', component:CategoryComponent },
  {path:'product', component: ProductListComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
