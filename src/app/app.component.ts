import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/product-list/request.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RequestService]
})
export class AppComponent {
  title = 'e-shop';
  

  constructor(private requestService: RequestService){}
}
