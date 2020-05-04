import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('carousel') carousel: any;

  title = 'zen-sleep';
  readonly pillowTypes = ['preto', 'lavanda', 'branco', 'verde'];
  images: any[] = [];
  buyPillows = [];

  ngOnInit(): void {

    this.images = [
      {
        image: `../assets/images/pillows/regular/big-preto@2x.png`,
        name: 'Travesseiro Zen Sleep<br/>Dynamic Cell&trade; Carbon Active'
      },
      {
        image: `../assets/images/pillows/regular/big-lavanda@2x.png`,
        name: 'Travesseiro Zen Sleep<br/>Dynamic Cell&trade; French Lavanda'
      },
      {
        image: `../assets/images/pillows/regular/big-branco@2x.png`,
        name: 'Travesseiro Zen Sleep<br/>Dynamic Cell&trade; Pure'
      },
      {
        image: `../assets/images/pillows/regular/big-verde@2x.png`,
        name: 'Travesseiro Zen Sleep<br/>Dynamic Cell&trade; Aloe Vera'
      },
    ];

  }

  slideTo(id: number) {
    this.carousel.select('slide_' + id);
  }
}
