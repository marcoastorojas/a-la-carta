import { Component, OnInit } from '@angular/core';
import DishApp from 'src/app/interfaces/DishApp';
import { DishesService } from '../../services/dishes.service';


@Component({
  selector: 'app-list-dishes',
  templateUrl: './list-dishes.component.html',
  styleUrls: ['./list-dishes.component.css']
})
export class ListDishesComponent implements OnInit {

  constructor(private dishesService: DishesService) { }
  get list() {
    return this.dishesService.listOfDishes
  }
  ngOnInit(): void {

  }

  addDishMenu(dish: DishApp) {
    this.dishesService.addItemMenu(dish)
  }
  removeDishMenu(id: number) {
    this.dishesService.deleteItemMenu(id)
  }

  searchDishes(query:string){
    this.dishesService.searchDish(query)
      .subscribe(console.log)
  }
}
