import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayHeader = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
      this.router.events.pipe(
          filter(event => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        this.displayHeader = event.url !== '/';
      });
  }
}
