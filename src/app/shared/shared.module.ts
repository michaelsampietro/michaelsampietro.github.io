import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialImports } from './consts/material-imports';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export const declarationsAndExports = [
  HeaderMenuComponent,
  HeaderComponent,
  FooterComponent
];

@NgModule({
  declarations: [declarationsAndExports],
  exports: [declarationsAndExports],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MaterialImports
  ]
})

export class SharedModule { }
