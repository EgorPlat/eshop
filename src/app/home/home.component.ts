import { Component, OnInit } from '@angular/core';
import { orders } from './order';
import { RequestService } from 'src/app/product-list/request.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RequestService]
})
export class HomeComponent implements OnInit {
  
  order = this.requestService.items;
  getOrder(){
    console.log(this.requestService.getList());
  }
  constructor(private requestService: RequestService) { }
  
  ngOnInit(): void {
  }

}
