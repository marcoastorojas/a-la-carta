import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishesRoutingModule } from './dishes-routing.module';
import { ListDishesComponent } from './pages/list-dishes/list-dishes.component';
import { DetailDishComponent } from './pages/detail-dish/detail-dish.component';
import { DishesComponent } from './dishes.component';
import { MenuModule } from '../menu/menu.module';


@NgModule({
  declarations: [
    ListDishesComponent,
    DetailDishComponent,
    DishesComponent
  ],
  imports: [
    CommonModule,
    DishesRoutingModule,
    MenuModule
  ]
})
export class DishesModule { }
