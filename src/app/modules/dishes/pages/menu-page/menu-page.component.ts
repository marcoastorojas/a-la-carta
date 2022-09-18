import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  constructor(private dishesService: DishesService) { }

  ngOnInit(): void {
    console.log(this.listofDiets);

  }
  get list() {
    return this.dishesService.menu
  }

  get listofDiets() {
    const allDiets = this.list.map(dish => dish.diets).flat()
    const dietsReduce = allDiets.reduce((acc: string[], cur) => acc.includes(cur) ? acc : [...acc, cur], [])
    return dietsReduce
  }

  get totalPrice() {
    return Math.round(this.list.reduce((sum, cur) => cur.pricePerServing + sum, 0)*100)/100
  }

  get healtAverage() {
    return Math.round(this.list.reduce((sum, cur) => cur.healthScore + sum, 0)/this.list.length*100)/100 || 0
  }
  get timeAverage(){
    return Math.round(this.list.reduce((acc,cur)=>acc+cur.readyInMinutes,0)/this.list.length) || 0
  }
}
