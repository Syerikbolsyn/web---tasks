import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {CategoryDressComponent} from "./category-dress/category-dress.component";
import {CategoryGameComponent} from "./category-game/category-game.component";
import {CategoryPetComponent} from "./category-pet/category-pet.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'product', component: ProductListComponent  },
  {path: 'c1', component: CategoryDressComponent},
  {path: 'c2', component: CategoryPetComponent},
  {path: 'c3', component: CategoryGameComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
