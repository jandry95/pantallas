import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ApiService } from 'src/app/Server/api.service';
import  Swal  from 'sweetalert2';
@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  categories : any;
  category = new Category();
  page : any;
  spinner = true;
  constructor(
    private api : ApiService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.api.getCategories().subscribe((res : any) => {
      //console.log(res)
      this.categories = res.data
      this.spinner = false
     // console.log(this.categories)
    })

  }

  selectCategories(id : string){
    this.router.navigate(["/edit-category/", id])
    console.log(id)
  }

  deleteCategories(id : string){
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
        this.api.deleteCategories(id).subscribe((res) => {
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'Categoria eliminado.',
            'success'
          )
          this.router.navigate(['list-categories']);
        },error => {
          Swal.fire({

            icon : 'error',
            title : 'Ooops',
            text : 'No se pudo Eliminar la Categoria'
          })
          console.log(error);
          this.router.navigate(['list-categories']);
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
        this.router.navigate(['list-categories']);
      }
    })
  }

}
