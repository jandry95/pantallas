import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Server/api.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.css']
})
export class CreateCategoriesComponent implements OnInit {

  categoryForm : any = FormGroup;

  constructor(
    private api : ApiService,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      categoriesName : new FormControl('',Validators.required)
    });
  }


  createCategories()
  {
    const form = this.categoryForm;

    this.api.createCaegory(form.value.categoriesName).subscribe((data) =>
    {
      this.categoryForm = new FormGroup({
        categoriesName : new FormControl(null)
      })
      Swal.fire({
        position : 'center',
        icon : 'success',
        title : 'Categoria Creada con Exito',
        showConfirmButton : false,
        timer: 1500
      })
      this.route.navigate(["list-categories"]);
    },

    error => {
      console.log(error);
      Swal.fire({

        icon : 'error',
        title : 'Ooops',
        text : 'No se pudo crear '
      })
    });
  }

}
