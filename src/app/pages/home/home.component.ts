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
  }
}
