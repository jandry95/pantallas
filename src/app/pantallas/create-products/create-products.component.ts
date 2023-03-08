import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ApiService } from 'src/app/Server/api.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {

  categories : any;
  category = new Category();
  productForm : any = FormGroup;
  constructor(
    private api : ApiService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.api.getCategories().subscribe((res : any) => {
      this.categories = res['data']
      console.log(this.categories)
    });
    this.productForm = new FormGroup({
      productsName : new FormControl(null, Validators.required),
      productsStock : new FormControl(null, Validators.required),
      productsDescription : new FormControl(null, Validators.required),
      category_id : new FormControl(null, Validators.required)
    });

  }

  createProduct()
  {
    const form = this.productForm;

    this.api.createProduct(form.value.productsName, form.value.productsStock, form.value.productsDescription, form.value.category_id)
    .subscribe((data) => {
      this.productForm = new FormGroup({
        productsName : new FormControl(null),
        productsStock : new FormControl(null),
        productsDescription : new FormControl(null),
        category_id : new FormControl(null)
      })
      console.log("Creado con exito");
      //console.log(data);
      Swal.fire({
        position : 'center',
        icon : 'success',
        title : 'Producto Creado con Exito',
        showConfirmButton : false,
        timer: 1500
      })

      this.router.navigate(['list-products']);

    },
    error => {
      console.log(error);
      Swal.fire({

        icon : 'error',
        title : 'Ooops',
        text : 'No se pudo crear el Producto'
      })
    });
  }

}
