import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private dishesService: DishesService) { }

  ngOnInit(): void {
  }
  get menu() {
    return this.dishesService.menu
  }
  get averageHealtScore() {
    const summaryScore = this.menu.reduce((acc, cur) => acc + cur.healthScore, 0) 
    return  Math.round(summaryScore/ this.menu.length*100)/100 || 0
  }
  get priceSummation() {
    return Math.round(this.menu.reduce((acc, cur) => acc + cur.pricePerServing, 0)*100)/100
  }
  get timeAverage(){
    return Math.round(this.menu.reduce((acc,cur)=>acc+cur.readyInMinutes,0)/this.menu.length)|| 0
  }


  delete(id: number) {
    this.dishesService.deleteItemMenu(id)
  }
}
