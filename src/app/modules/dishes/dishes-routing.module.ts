import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishesComponent } from './dishes.component';
import { DetailDishComponent } from './pages/detail-dish/detail-dish.component';
import { ListDishesComponent } from './pages/list-dishes/list-dishes.component';

const routes: Routes = [{
  path: "",
  component: DishesComponent,
  children: [
    { path: "list", component: ListDishesComponent },
    { path: "list/:id", component: DetailDishComponent },
    { path: "**", redirectTo: "list", pathMatch: "full" }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesRoutingModule { }
