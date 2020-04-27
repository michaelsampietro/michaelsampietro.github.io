import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup = null;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService) {
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
    console.log(values);
    const user = values as User;
    user.birth = values.birth.getTime();
    user.id = new Date().getTime();
    console.log(user);
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
