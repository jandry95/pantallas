import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/Server/api.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products : any;
  product = new Product();
  spinner = true;

  page : any;
  constructor(
    private api : ApiService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((res : any) => {
      this.products = res['data']
      this.spinner = false;
      console.log(this.products) 
      
    })

  }



  selectProduct(id : string){
    this.router.navigate(["/edit-products/", id])
    console.log(id)
  }

  actualizarLista()
  {
    window.location.reload();
  }

  deleteProduct(id : any)
  {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Seguro que quieres Eliminar',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Deseo Borrar!',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {

      if (result.isConfirmed) {
        this.api.deleteProducts(id).subscribe((res) => {
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'Su producto ha sido eliminado.',
            'success'
          )
          this.router.navigate(['']);
        },error => {
          Swal.fire({

            icon : 'error',
            title : 'Ooops',
            text : 'No se pudo Eliminar el Producto'
          })
          console.log(error);
          this.router.navigate(['']);
        })

      } else if (

        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tu producto se salvo :)',
          'error'
        )
        this.router.navigate(['']);
      }
    })



  }

}
