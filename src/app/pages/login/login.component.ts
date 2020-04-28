import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = null;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private loaderService: LoaderService,
              private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  login(credentials: {email: string, password: string}) {
    const loader = this.loaderService.open();

    // Aqui vai no banco e verifica as credenciais do usuario;

    // Após retorno do backend, faz o login do usuario
    this.userService.login(credentials);

    // Verifica se é necessário redirecionar o usuário para alguma página anterior
    const redirectTo = sessionStorage.getItem('redirect');
    if (redirectTo) {
      this.router.navigate([redirectTo]);
      sessionStorage.removeItem('redirect');
      loader.close();
    } else {
      this.router.navigate(['/produtos']);
      loader.close();
    }
  }

  // Getters
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

}
