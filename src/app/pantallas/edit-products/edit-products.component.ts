import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Server/api.service';
import { Product } from 'src/app/models/product';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  id : any
  productsName : any
  productsStock : any
  productsDescription : any
  category_id :  any
  categories : any
  products : any
  product  = new Product();
  constructor(
    private api : ApiService,
    private router : Router,
    private activeParams : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.api.getCategories().subscribe((res : any) => {
      this.categories = res['data']
      console.log(this.categories)
    });

    this.activeParams.params.subscribe(params => {
      this.id = params['id']
      //console.log(this.id)
      this.api.getProductsById(this.id).subscribe(
        (res : any) => {
          this.products = res['data']
         console.log(this.products)
        }
      )
    });

  }

  updateProduct () {
    this.api.updateProducts(this.id, this.products).subscribe((data : any) => {
      console.log(data);
      Swal.fire({
        position : 'center',
        icon : 'warning',
        title : 'Producto Actualizado con Exito',
        showConfirmButton : false,
        timer: 1500
      });

      this.router.navigate(['list-products']);
    }, error => {
      Swal.fire({

        icon : 'error',
        title : 'Ooops',
        text : 'No se pudo actualizar el Producto'
      })
      console.log(error);
    })
  }


}
