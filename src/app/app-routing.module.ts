import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListComponent } from './product-list/product-list.component';
import { MoneyComponent } from './money/money.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
   { path: 'list', component: ProductListComponent },
   { path: 'money', component: MoneyComponent },
   { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
