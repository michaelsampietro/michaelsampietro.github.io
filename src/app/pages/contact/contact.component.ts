import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  whatsAppIcon = faWhatsapp;
  emailIcon = faEnvelope;


  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      title: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  ngOnInit(): void { }

  send(formValues: any) {
    console.log(formValues);
  }

  // Getters
  get email() { return this.contactForm.get('email'); }
  get title() { return this.contactForm.get('title'); }
  get message() { return this.contactForm.get('message'); }

}
