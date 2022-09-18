import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishesService } from 'src/app/modules/dishes/services/dishes.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private dishesServices: DishesService) { }
  logout() {
    localStorage.removeItem("token")
    this.router.navigateByUrl("/auth")
  }
  ngOnInit(): void {
  }
  buscar(query: string) {
    this.dishesServices.searchDish(query)
    this.router.navigateByUrl("/dishes/list")
  }
}
