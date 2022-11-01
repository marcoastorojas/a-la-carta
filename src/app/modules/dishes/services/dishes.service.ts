import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import DishApp from 'src/app/interfaces/DishApp';
import { SearchApiResponse } from 'src/app/interfaces/SearchApiResponse';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  constructor(private http: HttpClient) { }
  private _listOfDishes: DishApp[] = [];
  private _menu: DishApp[] = JSON.parse(localStorage.getItem("dishesMenu") || "[]")
  getApiUrl(enviromentApiKey: string): string {
    return `https://api.spoonacular.com/recipes/complexSearch?apiKey=${enviromentApiKey}&addRecipeInformation=true`
  }
  get menu(): DishApp[] { return this._menu }
  get listOfDishes(): DishApp[] { return this._listOfDishes }

  searchDish(query: string) {
    const url = `${this.getApiUrl("89975b415f604ae892240bcab3935a3b")}&query=${query}`
    return this.http.get<SearchApiResponse>(url)
      .pipe(
        catchError(data => {
          const urlprovitional = `${this.getApiUrl("837af218d058494eaa022a2317f83988")}&query=${query}`
          return this.http.get<SearchApiResponse>(this.getApiUrl(environment.api_key2))
        }),
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
  addItemMenu(dish: DishApp): any {
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
