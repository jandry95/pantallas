import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Server/api.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.css']
})
export class EditCategoriesComponent implements OnInit {

  id : any
  categoriesName : any
  categories : any

  constructor(
    private api : ApiService,
    private router : Router,
    private activeParams : ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activeParams.params.subscribe( params => {
      this.id = params['id']
      console.log(this.id)
      this.api.getCategoriesById(this.id).subscribe((res) => {
        this.categories = res
        console.log(this.categories)
      })
    })
  }

  updateCategory()
  {
    this.api.updateCategories(this.id, this.categories).subscribe((data : any) =>
    {
      Swal.fire({
        position : 'center',
        icon : 'warning',
        title : 'Categoria Actualizado con Exito',
        showConfirmButton : false,
        timer: 1500
      });

      this.router.navigate(['list-categories']);
    }, error => {
      Swal.fire({

        icon : 'error',
        title : 'Ooops',
        text : 'No se pudo actualizar '
      })
      console.log(error);
    }
    )}


}
