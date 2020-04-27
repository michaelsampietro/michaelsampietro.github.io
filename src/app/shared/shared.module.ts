import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialImports } from './consts/material-imports';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PillowsComponent } from './pillows/pillows.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const declarationsAndExports = [
  HeaderMenuComponent,
  HeaderComponent,
  FooterComponent,
  PillowsComponent,
  ShippingComponent
];

@NgModule({
  declarations: [declarationsAndExports],
  exports: [declarationsAndExports],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialImports
  ]
})

export class SharedModule { }
