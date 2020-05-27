import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { EnderecoComponent } from './pages/endereco/endereco.component';
import { LoginGuard } from './guards/login.guard';
import { CheckoutGuard } from './guards/checkout.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'produtos', component: ProductComponent, pathMatch: 'full' },
  { path: 'produtos/:model', component: ProductComponent, pathMatch: 'full' },
  { path: 'sacola', component: CartComponent, pathMatch: 'full' },
  { path: 'faq', component: FaqComponent, pathMatch: 'full' },
  { path: 'contato', component: ContactComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [LoginGuard]}, // descontinuado
  { path: 'cadastro', component: CadastroComponent, pathMatch: 'full' },
  { path: 'endereco', component: EnderecoComponent, pathMatch: 'full' },
  { path: 'pagamento', component: CheckoutComponent, pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
