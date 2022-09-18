import { Component, Input, OnInit } from '@angular/core';
import DishApp from 'src/app/interfaces/DishApp';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent implements OnInit {
  constructor(private dishesService: DishesService) { }
  ngOnInit(): void {
  }
  @Input("dish") dish!: DishApp

  removeDishMenu(id: number) {
    this.dishesService.deleteItemMenu(id)
  }

}
