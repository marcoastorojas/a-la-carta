import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishesRoutingModule } from './dishes-routing.module';
import { ListDishesComponent } from './pages/list-dishes/list-dishes.component';
import { DetailDishComponent } from './pages/detail-dish/detail-dish.component';
import { DishesComponent } from './dishes.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CardDishComponent } from './components/card-dish/card-dish.component';
import { TitleCardPipe } from './pipes/title-card.pipe';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';


@NgModule({
  declarations: [
    ListDishesComponent,
    DetailDishComponent,
    DishesComponent,
    SearchFormComponent,
    MenuComponent,
    CardDishComponent,
    TitleCardPipe,
    CardMenuComponent,
    CardDetailComponent,
    MenuPageComponent,
  ],
  imports: [
    CommonModule,
    DishesRoutingModule,
    MaterialModule
  ],
  exports: [
    SearchFormComponent,
  ]
})
export class DishesModule { }
