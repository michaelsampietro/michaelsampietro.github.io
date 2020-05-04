import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pillows',
  templateUrl: './pillows.component.html',
  styleUrls: ['./pillows.component.scss']
})
export class PillowsComponent implements OnInit {

  buyPillows: any[] = [];

  constructor() {
    this.buyPillows = [
      {
        name: 'Carbon Active',
        image: 'https://zen-sleep.s3.amazonaws.com/images/pillows/shadowed/zen-carbon-active@2x.png',
        href: ['/produtos/carbon']
      },
      {
        name: 'French Lavanda',
        image: 'https://zen-sleep.s3.amazonaws.com/images/pillows/shadowed/zen-lavanda@2x.png',
        href: ['/produtos/lavanda']
      },
      {
        name: 'Aloe Vera',
        image: 'https://zen-sleep.s3.amazonaws.com/images/pillows/shadowed/aloe-vera@2x.png',
        href: ['/produtos/aloe-vera']
      },
      {
        name: 'Pure',
        image: 'https://zen-sleep.s3.amazonaws.com/images/pillows/shadowed/zen-pure@2x.png',
        href: ['/produtos/pure']
      },
    ];
  }

  ngOnInit(): void {
  }



}
