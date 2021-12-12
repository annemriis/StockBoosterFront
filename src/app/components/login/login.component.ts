import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    //this.loginForm = this.formBuilder.group({
      //username: ['', Validators.required],
      //password: ['', Validators.required]
    //});
  }

  onSubmit() {
    if (this.loginForm?.invalid) {
      return;
    }
    console.log(this.loginForm?.value)
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm?.controls[controlName].hasError(errorName);
  }
}
