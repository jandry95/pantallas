import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinValidator, Validators } from '@angular/forms';
import { min } from 'rxjs';
import { ApiService } from 'src/app/Server/api.service';
import  Swal  from 'sweetalert2';
@Component({
  selector: 'app-create-clients',
  templateUrl: './create-clients.component.html',
  styleUrls: ['./create-clients.component.css']
})

export class CreateClientsComponent implements OnInit {

  clientsForm : any = FormGroup;
  submitted = false;
  ci : any
  msg : any
  validar : any
  constructor(
    private api : ApiService,

  ) { }

  ngOnInit(): void {
    this.clientsForm = new FormGroup({
      name : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
      // ci : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      address : new FormControl('', Validators.required),
      phone : new FormControl('', Validators.required),
    });
  }

  get f() { return this.clientsForm.controls; }

  createCliente()
  {
    this.submitted = true;
    const form = this.clientsForm;
    if (this.clientsForm.invalid) {
      Swal.fire({

        icon : 'error',
        title : 'Ooops',
        text : 'Llene todos los campos'
      })
      return;
  }

  let cedulaCorrecta = false;

  if (this.ci.length == 10)
  {
      let tercerDigito = parseInt(this.ci.substring(2, 3));
      if (tercerDigito < 6) {

          // El ultimo digito se lo considera dígito verificador
          let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
          let verificador = parseInt(this.ci.substring(9, 10));
          let suma:number = 0;
          let digito:number = 0;
          for (let i = 0; i < (this.ci.length - 1); i++) {
              digito = parseInt(this.ci.substring(i, i + 1)) * coefValCedula[i];
              suma += ((parseInt((digito % 10)+'') + (parseInt((digito / 10)+''))));
        //      console.log(suma+" suma"+coefValCedula[i]);
          }

          suma= Math.round(suma);

        //  console.log(verificador);
        //  console.log(suma);
        //  console.log(digito);

          if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10)== verificador)) {
              cedulaCorrecta = true;
          } else if ((10 - (Math.round(suma % 10))) == verificador) {
              cedulaCorrecta = true;

              this.api.getCi(this.ci).subscribe((res : any) => {
                this.msg = res['msg']
                this.validar = res['data']
                if(this.validar != null) {
                  console.log(this.msg)
                  Swal.fire({

                    icon : 'error',
                    title : 'Ooops',
                    text : this.msg
                  })
                }else {
                  console.log("No existe")
                  this.api.createClients(form.value.name, form.value.lastName, this.ci, form.value.address, form.value.phone)
              .subscribe((data : any) => {



                this.clientsForm = new FormGroup({
                  name : new FormControl(null),
                  lastName : new FormControl(null),
                  // ci : new FormControl(null),
                  address : new FormControl(null),
                  phone : new FormControl(null),
                })
                Swal.fire({
                  position : 'center',
                  icon : 'success',
                  title : 'Cliente Creado con Exito',
                  showConfirmButton : false,
                  timer: 1500
                })
                console.log("Creado")
                console.log(data)
              },
              error => {
                console.log(error)
                console.log("no se puede")

                Swal.fire({

                  icon : 'error',
                  title : 'Ooops',
                  text : 'No se pudo crear '
                })
              });
                }

              })


          } else {
              cedulaCorrecta = false;

              Swal.fire({

                icon : 'error',
                title : 'Ooops',
                text : 'Cedula Incorrecta '
              })
          }
      } else {
          cedulaCorrecta = false;
          Swal.fire({

            icon : 'error',
            title : 'Ooops',
            text : 'Cedula Incorrecta '
          })
      }
  } else {
      cedulaCorrecta = false;
      Swal.fire({

        icon : 'error',
        title : 'Ooops',
        text : 'Cedula Incorrecta '
      })
  }


this.validador= cedulaCorrecta;



  }


  public validador : any; //esta variable se la puede usar para realizar la validacion en el html del component

validadorDeCedula() {



}


}
