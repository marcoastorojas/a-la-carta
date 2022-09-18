import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import DishApp from 'src/app/interfaces/DishApp';
import { SearchApiResponse } from 'src/app/interfaces/SearchApiResponse';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  apiUrl = `${environment.baseUrl}/recipes/complexSearch?apiKey=${environment.api_key3}&addRecipeInformation=true`
  constructor(private http: HttpClient) { }
  private _listOfDishes: DishApp[] = [];
  private _menu: DishApp[] = JSON.parse(localStorage.getItem("dishesMenu") || "[]")
  get menu(): DishApp[] { return this._menu }
  get listOfDishes(): DishApp[] { return this._listOfDishes }

  searchDish(query: string) {
    const url = `${this.apiUrl}&query=${query}`
    return this.http.get<SearchApiResponse>(url)
      .pipe(
        map(data => {
          return {
            ...data,
            results: data.results.map(dish => ({ ...dish, itsOnTheMenu: false }))
          }
        }),
        tap(res => {
          this._listOfDishes = res.results
          this.updateList()
        })
      )

  }
  deleteItemMenu(id: number) {
    this._menu = this.menu.filter(menuItem => menuItem.id !== id)

    this.updateList()
  }
  addItemMenu(dish: DishApp):any {
    const veganItems = this.menu.filter(dish => dish.vegan).length
    const noVeganItems = this._menu.length - veganItems
    if (this._menu.length === 4) {
      return Swal.fire({
        icon: 'error',
        text: 'you can not add more than 4 dishes!',
      })
    }
    if (dish.vegan && veganItems >= 2) {
      return Swal.fire({
        icon: 'error',
        text: 'there can only be 2 vegan dishes!',
      })
    }
    if (!dish.vegan && noVeganItems >= 2) {
      return Swal.fire({
        icon: 'error',
        text: 'there can only be 2 no vegan dishes!',
      })
    }

    this._menu = [...this.menu, dish]
    this.updateList()
  }
  resetMenu() {
    this._menu = []
  }
  updateList() {
    this._listOfDishes = this._listOfDishes.map(dishItem => ({ ...dishItem, itsOnTheMenu: !!this.menu.find(menuItem => menuItem.id === dishItem.id) }))
    localStorage.setItem("dishesMenu", JSON.stringify(this._menu))
  }
}
