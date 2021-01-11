import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RequestService } from './product-list/request.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { MoneyComponent } from './money/money.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import {MatSortModule} from '@angular/material/sort';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    MoneyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatIconModule,
    MatGridListModule,
    MatSortModule,
    MatBadgeModule,
    MatMenuModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
