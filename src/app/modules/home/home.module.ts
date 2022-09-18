import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DishesModule } from '../dishes/dishes.module';


@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    DishesModule
  ]
})
export class HomeModule { }
