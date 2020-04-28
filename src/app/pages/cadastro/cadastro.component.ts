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
    this.cadastroForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      birth: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      whatsappAlerts: true,
      emailAlerts: true,
    });
  }

  ngOnInit(): void {
  }

  register(values: any) {
    const loader = this.loaderService.open();
    const user = values as User;
    const birth = new Date(values.birth);
    user.birth = birth.getTime();
    user.id = new Date().getTime();

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
  get password() { return this.cadastroForm.get('password'); }
  get name() { return this.cadastroForm.get('name'); }
  get birth() { return this.cadastroForm.get('birth'); }
  get sex() { return this.cadastroForm.get('sex'); }
  get phone() { return this.cadastroForm.get('phone'); }
  get whatsappAlerts() { return this.cadastroForm.get('whatsappAlerts'); }
  get emailAlerts() { return this.cadastroForm.get('emailAlerts'); }

}
