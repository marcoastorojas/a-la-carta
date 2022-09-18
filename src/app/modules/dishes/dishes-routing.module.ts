import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishesComponent } from './dishes.component';
import { DetailDishComponent } from './pages/detail-dish/detail-dish.component';
import { ListDishesComponent } from './pages/list-dishes/list-dishes.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

const routes: Routes = [{
  path: "",
  component: DishesComponent,
  children: [
    { path: "list", component: ListDishesComponent },
    { path: "list/:id", component: DetailDishComponent },
    { path: "menu", component: MenuPageComponent },
    { path: "**", redirectTo: "list", pathMatch: "full" }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesRoutingModule { }
