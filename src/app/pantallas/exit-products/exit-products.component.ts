import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Server/api.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-exit-products',
  templateUrl: './exit-products.component.html',
  styleUrls: ['./exit-products.component.css']
})
export class ExitProductsComponent implements OnInit {
  sales_products : any
  product_id : any
  client_id : any
  clients : any
  //salesForm : any = FormGroup;
  products : any
  productById : any
  cantidad : any
  constructor(
    private api : ApiService,
    private router : Router,
    private paramsActive : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paramsActive.params.subscribe(params => {
      this.product_id = params['id']
      this.api.getProductsById(this.product_id).subscribe((res : any) =>
       {
        this.products = res['data']
        console.log(this.products)
      })
    })

    this.api.getClientes().subscribe((res : any) => {
      this.clients = res['data']
      console.log(this.clients)
    })

    // this.salesForm = new FormGroup({
    //   sales_products : new FormControl ('', Validators.required),


    // });
  }


  createSales()
  {
    console.log(this.product_id)
    this.api.getProductsById(this.product_id).subscribe((res : any) => {
      this.productById = res['data']
      console.log(this.productById['productsStock'])
      this.cantidad = this.productById['productsStock']
      let data = {
        'sales_products' : this.sales_products,
        'product_id' : this.product_id,
        'client_id' : this.client_id,
      }
      console.log(data)

      if(this.cantidad < this.sales_products)
      {
        Swal.fire({

              icon : 'error',
              title : 'Cantidad insuficiente',
              text : 'Actualmente solo dispones de' + ' ' + this.cantidad ,

            })
      }else{
         this.api.createSales(data).subscribe((data : any) =>
    {
      console.log(data)
      Swal.fire({
        position : 'center',
        icon : 'success',
        title : 'Venta Realizada con Exito',
        showConfirmButton : false,
        timer: 1500
      });
      this.router.navigate(['sales-products'])
    },error => {
      console.log(error);
      Swal.fire({

        icon : 'error',
        title : 'Ooops',
        text : 'No se pudo realizar la Venta'
      })
    })
      }
    })





  }


}
