import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'zen-sleep';
  readonly pillowTypes = ['preto', 'lavanda', 'branco', 'verde'];
  images: string[] = [];
  buyPillows = [];

  ngOnInit(): void {
    this.images = this.pillowTypes.map((n) => `../assets/images/pillows/regular/big-${n}@2x.png`);


    this.buyPillows = [
      {
        name: 'Carbon Active',
        image: '../assets/images/pillows/shadowed/zen-carbon-active@2x.png'
      },
      {
        name: 'French Lavanda',
        image: '../assets/images/pillows/shadowed/zen-lavanda@2x.png'
      },
      {
        name: 'Aloe Vera',
        image: '../assets/images/pillows/shadowed/aloe-vera@2x.png'
      },
      {
        name: 'Pure',
        image: '../assets/images/pillows/shadowed/zen-pure@2x.png'
      },
    ];
  }
}
