import { Component, OnInit } from '@angular/core';
import { Faq, FaqQuestions } from 'src/models/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  readonly faqQuestions: Faq[] = FaqQuestions;
  readonly products: any[] = null;

  constructor() {

    this.products = [
      {
        name: 'Travesseiro Zen Sleep Dynamic Cell&trade; Carbon Active',
        image: 'https://zen-sleep.s3.amazonaws.com/images/pillows/shadowed/zen-carbon-active@2x.png',
        style: 'height: auto;width: 130%'
      },
      {
        name: 'Travesseiro Zen Sleep Dynamic Cell&trade; Aloe Vera',
        image: 'https://zen-sleep.s3.amazonaws.com/images/pillows/shadowed/aloe-vera@2x.png',
        style: 'height: auto;width: 130%'
      },
      {
        name: 'Travesseiro Zen Sleep Dynamic Cell&trade; French Lavanda',
        image: 'https://zen-sleep.s3.amazonaws.com/images/pillows/shadowed/zen-lavanda@2x.png',
        style: 'height: auto;width: 130%'
      },
      {
        name: 'Travesseiro Zen Sleep Dynamic Cell&trade; Pure',
        image: 'https://zen-sleep.s3.amazonaws.com/images/pillows/shadowed/zen-pure@2x.png',
        style: 'height: auto;width: 130%'
      },
      {
        name: 'Spray de Ambiente Zen Sleep French Lavanda',
        image: 'https://zen-sleep.s3.amazonaws.com/images/faq/perfume@2x.png',
        style: 'height: 130px; width: auto;'
      },
      {
        name: 'Capa de Travesseiro 100% Algodão Natural Zen Sleep',
        image: 'https://zen-sleep.s3.amazonaws.com/images/faq/capa-carbon@2x.png',
        style: 'height: 130px;width:auto;transform:scale(.63)'
      },
    ];
  }

  ngOnInit(): void {

  }

  changeIcon(el: any) {
    console.log(el);
    console.log('teste');
  }

}
