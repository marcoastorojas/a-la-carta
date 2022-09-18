import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  get itsOnMeny() {
    return this.dishesService.listOfDishes.find((dish) => dish.id === this.detailDish.id)?.itsOnTheMenu
  }
  constructor(public dishesService: DishesService, private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(({ id }) => {
      
      this.http.get<DishDetail>(`${environment.baseUrl}/recipes/${id}/information?apiKey=${environment.api_key3}`)
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
