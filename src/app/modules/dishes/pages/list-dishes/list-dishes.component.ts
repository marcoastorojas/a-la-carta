import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/modules/menu/services/menu.service';

@Component({
  selector: 'app-list-dishes',
  templateUrl: './list-dishes.component.html',
  styleUrls: ['./list-dishes.component.css']
})
export class ListDishesComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
  }

  addDish() {
    // this.menuService.addDish()
  }
  removeDish() {
    //
  }
}
