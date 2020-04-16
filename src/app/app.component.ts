import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zen-sleep';

  constructor(private router: Router) {
  }

  public displayToolbar(): boolean {
    return this.router.url !== '/';
  }
}

