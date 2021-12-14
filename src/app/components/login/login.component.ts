import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginRequest} from "../../model/login-request";
import {first} from "rxjs/operators";
import {LoginResponse} from "../../model/login-response";
import {AuthenticationService} from "../../service/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  returnUrl: string = '/'

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
    if (this.authenticationService.getCurrentUserValue) {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value)
    const {username, password} = this.loginForm.value
    const loginRequest = new LoginRequest(username, password);
    console.log(loginRequest)
    this.authenticationService.login(loginRequest)
      .pipe(first())
      .subscribe((response: LoginResponse) => {
        console.log(response)
        this.router.navigate([this.returnUrl])
      }, (response: LoginResponse) => {
        console.log(response);
      });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }
}
