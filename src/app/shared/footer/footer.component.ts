import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebookF, faWhatsapp, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  instagramIcon: IconDefinition = faInstagram;
  facebookIcon: IconDefinition = faFacebookF;
  whatsAppIcon: IconDefinition = faWhatsapp;
  emailIcon: IconDefinition = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
