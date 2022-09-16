import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/modules/menu/services/menu.service';

@Component({
  selector: 'app-detail-dish',
  templateUrl: './detail-dish.component.html',
  styleUrls: ['./detail-dish.component.css']
})
export class DetailDishComponent implements OnInit {

  
  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
  }
  addDish(){
    // this.menuService.addDish()
  }
  removeDish(){
    //
  }
}
