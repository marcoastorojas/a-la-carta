import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import AuthResponse from '../../interfaces/AuthResponse';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private fb:FormBuilder) { }
  userForm:FormGroup = this.fb.group({
    email:["",[Validators.required]],
    password:["", [Validators.required]]
  })


  ngOnInit(): void {
  }


  handleSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched()
      return ;
    }
    this.http.post<AuthResponse>("http://challenge-react.alkemy.org/", this.userForm.value)
      .subscribe(
        {
          next: (data) => { console.log("viene token por lo tanto redirigir a home") },
          error: ({ error }) => { console.log(`mostrando ${error.error} en una venatna emergente`) }
        })
  }
  showError(camp:string){
    return this.userForm.controls[camp].errors &&
    this.userForm.controls[camp].touched
  }

}
