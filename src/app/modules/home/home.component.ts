import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishesService } from '../dishes/services/dishes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dishesService:DishesService, private router:Router) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.clear()
    this.dishesService.resetMenu()
    this.router.navigateByUrl("/auth")
  }
  buscar(query: string) {
    this.dishesService.searchDish(query)
    .subscribe()
    this.router.navigateByUrl("dishes/list")
  }
}
