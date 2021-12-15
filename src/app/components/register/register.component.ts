import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {LoginResponse} from "../../model/login-response";
import {UserService} from "../../service/user.service";
import {RegisterRequest} from "../../model/register-request";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
    if (this.authenticationService.getCurrentUserValue) {
      this.router.navigate(['/profile']);
    }
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value)
    const {username, password} = this.registerForm.value
    const registerRequest = new RegisterRequest(username, password);
    console.log(registerRequest)
    this.userService.register(registerRequest)
      .pipe(first())
      .subscribe((response: LoginResponse) => {
        console.log(response)
        this.router.navigate(['/login'])
      }, (response: LoginResponse) => {
        console.log(response);
      });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  }
}
