import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('carousel') carousel: any;

  title = 'zen-sleep';
  readonly pillowTypes = ['preto', 'lavanda', 'branco', 'verde'];
  images: any[] = [];
  buyPillows = [];
  saibaMaisLink = '/produtos/carbon';

  ngOnInit(): void {
    this.images = [
      {
        image: `https://zen-sleep.s3.amazonaws.com/images/pillows/regular/big-preto@2x.png`,
        name: 'Travesseiro Zen Sleep<br/>Dynamic Cell&trade; Carbon Active',
        saibaMaisLink: '/produtos/carbon'
      },
      {
        image: `https://zen-sleep.s3.amazonaws.com/images/pillows/regular/big-lavanda@2x.png`,
        name: 'Travesseiro Zen Sleep<br/>Dynamic Cell&trade; French Lavanda',
        saibaMaisLink: '/produtos/lavanda'
      },
      {
        image: `https://zen-sleep.s3.amazonaws.com/images/pillows/regular/big-verde@2x.png`,
        name: 'Travesseiro Zen Sleep<br/>Dynamic Cell&trade; Aloe Vera',
        saibaMaisLink: '/produtos/aloe-vera'
      },
      {
        image: `https://zen-sleep.s3.amazonaws.com/images/pillows/regular/big-branco@2x.png`,
        name: 'Travesseiro Zen Sleep<br/>Dynamic Cell&trade; Pure',
        saibaMaisLink: '/produtos/pure'
      }
    ];
  }

  ngAfterViewInit(): void {
    document.getElementById('thumbnail_0').classList.add('d-none');
  }

  slideTo(id: number) {
    this.carousel.select('slide_' + id);
    const elements = document.getElementsByClassName('thumbnail');

    Array.from(elements).forEach((el) => {
      if (!el.classList.contains('d-flex')) {
        el.classList.add('d-flex');
      }
      if (el.classList.contains('d-none')) {
        document.getElementById('thumbnail_' + id).classList.remove('d-none');
      }
    });

    document.getElementById('thumbnail_' + id).classList.remove('d-flex');
    document.getElementById('thumbnail_' + id).classList.add('d-none');
  }
}
