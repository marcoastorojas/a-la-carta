import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent, map, Subject, debounceTime } from 'rxjs';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private dishesService: DishesService) { }

  @Output("ondebouncer") ondebouncer: EventEmitter<string> = new EventEmitter()

  private debouncer: Subject<string> = new Subject

  ngOnInit(): void {
    
    this.debouncer
      .pipe(debounceTime(500))
      .subscribe(value => {       
        this.ondebouncer.emit(value) }
        )
  }


  handleKeyup(query: string = "") {  
    if (query.length <= 2) return   
    this.debouncer.next(query)
  }

}
