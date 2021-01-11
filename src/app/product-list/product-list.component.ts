import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { products } from './data';
import { RequestService } from './request.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [RequestService]
})

export class ProductListComponent implements OnInit {
  products = products;
  theme = 'Белая тема!';
  condition: boolean = true;

  list = this.products;
  count = this.list.length;

  set_category(ctg: string){
    this.list = [{}];
    this.count = 0;
    for( var i = 0; i < this.products.length; i++){
       if(this.products[i].category == ctg){
         this.list.push(this.products[i]);
         this.count += 1;
       }
    }
  }
  addToCart(product: any){
    this._snackBar.open(`Товар '${product.title}' был добавлен в корзину`)
    //console.log(product);
    //console.log(this.requestService.getList());
    this.requestService.makeList(product.title, product.price, product.calories);
  }
  /*setMode(){
    this.count = this.count + 1;
    if ( this.count / 2 == 0 ) {
      this.theme = 'Черная тема!';
      this.condition = false;
    } if ( this.count / 2 !== 0 ) {
      this.theme = 'Белая тема!';
      this.condition = true;
    }
    console.log(this.count + ' ' + this.condition);
  }*/
  constructor(private _snackBar: MatSnackBar, private requestService: RequestService) { 
    
   }
   hidden = false;

   toggleBadgeVisibility() {
     this.hidden = !this.hidden;
   }
  ngOnInit(): void {
    
  }

}
