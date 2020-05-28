import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { MaterialImports } from './shared/consts/material-imports';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ProductComponent } from './pages/product/product.component';
import { registerLocaleData, DatePipe } from '@angular/common';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EnderecoComponent } from './pages/endereco/endereco.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { LoginGuard } from './guards/login.guard';
import { CheckoutGuard } from './guards/checkout.guard';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';

export let options: Partial<IConfig> | (() => Partial<IConfig>);
registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    ErrorComponent,
    ContactComponent,
    ProductComponent,
    CartComponent,
    LoginComponent,
    CadastroComponent,
    EnderecoComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgbCarouselModule,
    FontAwesomeModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSelectModule,
    NgxMaskModule.forRoot(),
    MaterialImports,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always' } },
    { provide: LOCALE_ID, useValue: 'pt' },
    LoginGuard,
    CheckoutGuard,
    DatePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
