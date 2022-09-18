import { Component, Input, OnInit } from '@angular/core';
import DishApp from 'src/app/interfaces/DishApp';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
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
