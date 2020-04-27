import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = null;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm.value);
    // this.userService.setUser()
  }

  //Getters
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

}
