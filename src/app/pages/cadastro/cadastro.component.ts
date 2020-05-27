import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/models/user';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup = null;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private loaderService: LoaderService,
              private router: Router) {
    const user: User = JSON.parse(localStorage.getItem('user'));

    if (user) {
      this.cadastroForm = this.formBuilder.group({
        email: [user.email, [Validators.required, Validators.email]],
        name: [user.name, [Validators.required]],
        cpf: [user.cpf, [Validators.required]],
        phoneAreaCode: [user.phoneAreaCode, [Validators.required]],
        phone: [user.phone, [Validators.required]],
      });
    } else {
      this.cadastroForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        name: ['', [Validators.required]],
        cpf: ['', [Validators.required]],
        phoneAreaCode: ['', [Validators.required]],
        phone: ['', [Validators.required]],
      });
    }
  }

  ngOnInit(): void {
  }

  register(values: any) {
    const loader = this.loaderService.open();
    const user = values as User;

    const success = this.userService.register(user);

    if (success) {
      loader.close();
      this.router.navigate(['/endereco']);
    } else {
      alert('Erro no cadastro. Por favor, revise os dados.');
      loader.close();
    }
  }

  // getters
  get email() { return this.cadastroForm.get('email'); }
  get name() { return this.cadastroForm.get('name'); }
  get phone() { return this.cadastroForm.get('phone'); }
  get cpf() { return this.cadastroForm.get('cpf'); }
  get phoneAreaCode() { return this.cadastroForm.get('phoneAreaCode'); }
}
