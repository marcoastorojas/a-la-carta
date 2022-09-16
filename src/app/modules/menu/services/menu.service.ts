import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private Menu: DishApp[] = []
  private isLoading: boolean = true

  addDish(dish: DishApp) {
    //validacion de menu (no repetido, solo 2 vegetarianos y demas, solo 4)
  }
  removeDish(id: number) {
    
  }
  constructor() { }
}
