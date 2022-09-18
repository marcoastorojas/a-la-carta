import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import AuthResponse from '../../interfaces/AuthResponse';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router) { }
  userForm: FormGroup = this.fb.group({
    email: ["challenge@alkemy.org", [Validators.required]],
    password: ["react", [Validators.required]]
  })


  ngOnInit(): void {
  }

  isLoading: boolean = false

  handleSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched()
      return;
    }
    this.isLoading = true
    this.http.post<AuthResponse>("http://challenge-react.alkemy.org/", this.userForm.value)
      .pipe(tap(console.log))
      .subscribe(
        {
          next: (token) => {
            localStorage.setItem("token", token)
            this.router.navigateByUrl("/")
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Welcome',
              showConfirmButton: false,
              timer: 1300
            })
          },
          error: ({ error }) => {
            this.isLoading = false
            Swal.fire(
              'authentication failure',
              `${error.error}`,
              'error'
            )
          },
          complete: () => {
            this.isLoading = false
          }
        })
  }
  showError(camp: string) {
    return this.userForm.controls[camp].errors &&
      this.userForm.controls[camp].touched
  }

}
