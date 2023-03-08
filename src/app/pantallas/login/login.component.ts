import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import  Swal  from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : any = FormGroup;
  email = 'shaday@gmail.com'
  password = '1234569'
  loginFormClose = true;
  token : any
  prueba : any
  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl(null, Validators.required),
      password : new FormControl(null, Validators.required)
    });
  }

  pass() {

    const form = this.loginForm;

    const emailVer = form.value.email
    const passwordVer = form.value.password

    if(emailVer == this.email && passwordVer == this.password)
    {


      Swal.fire({
        position : 'center',
        icon : 'success',
        title : 'Bienvenido',
        showConfirmButton : false,
        timer: 1500
      })
      this.router.navigate(['list-products'])
    }else {
      Swal.fire({

        icon : 'error',
        title : 'Ooops',
        text : 'Email o Contraseña Incorrectos'
      })
    }

  }

  login(){
    this.loginFormClose = false
  }

}
