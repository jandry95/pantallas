import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Server/api.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  page : any;
  products : any
  constructor(
    private api : ApiService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((res : any) => {
      this.products = res['data']
    })
  }


  selectProduct(id : any) {
    this.router.navigate(['exit-products/', id])
  }

}
