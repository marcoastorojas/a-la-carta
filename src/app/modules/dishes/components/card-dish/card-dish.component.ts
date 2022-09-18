import { Component, Input, OnInit } from '@angular/core';
import DishApp from 'src/app/interfaces/DishApp';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-card-dish',
  templateUrl: './card-dish.component.html',
  styleUrls: ['./card-dish.component.css']
})
export class CardDishComponent implements OnInit {

  constructor(private dishesService: DishesService) { }
  ngOnInit(): void {
  }
  @Input("dish") dish!: DishApp
  removeDishMenu(id: number) {
    this.dishesService.deleteItemMenu(id)
  }
  addDishMenu(dish: DishApp) {
    this.dishesService.addItemMenu(dish)
  }
}
