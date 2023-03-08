import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Server/api.service';

@Component({
  selector: 'app-sales-products',
  templateUrl: './sales-products.component.html',
  styleUrls: ['./sales-products.component.css']
})
export class SalesProductsComponent implements OnInit {
  clients : any
  sales : any
  page : any
  spinner = true;
  constructor(
    private api : ApiService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.api.getSalesProducts().subscribe((res : any) => {
      this.sales = res['data']
      this.clients = res['data2']
      this.spinner = false;
      console.log(this.sales, this.clients)

    })
  }



}
