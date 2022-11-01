import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { DishDetail } from 'src/app/interfaces/DishDetail';
import { environment } from 'src/environments/environment';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-detail-dish',
  templateUrl: './detail-dish.component.html',
  styleUrls: ['./detail-dish.component.css']
})
export class DetailDishComponent implements OnInit {
  detailDish!: DishDetail
  loading = true
  getApiUrl(enviromentApiKey: string,id:string): string {
    return `https://api.spoonacular.com/recipes/${id}/information?apiKey=${enviromentApiKey}`
  }
  get itsOnMeny() {
    return this.dishesService.listOfDishes.find((dish) => dish.id === this.detailDish.id)?.itsOnTheMenu
  }
  constructor(public dishesService: DishesService, private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(({ id }) => {
      
      this.http.get<DishDetail>(this.getApiUrl("837af218d058494eaa022a2317f83988",id))
        .pipe(
          catchError((data)=>{
            return this.http.get<DishDetail>(this.getApiUrl("89975b415f604ae892240bcab3935a3b",id))
          })
        )
        .subscribe({
          next: (data) => {
            this.detailDish = data
            this.loading = false
          }
        })
    })
  }
  ngOnInit(): void {

  }
  addDish() {
    this.dishesService.addItemMenu(this.dishesService.listOfDishes.find((dish) => dish.id === this.detailDish.id)!)
  }

  get dataString() {
    return JSON.stringify(this.detailDish)
  }
  removeDish() {
    this.dishesService.deleteItemMenu(this.detailDish.id)
  }
}
