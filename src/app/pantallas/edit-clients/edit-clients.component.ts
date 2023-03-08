import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Server/api.service';
import  Swal  from 'sweetalert2';
@Component({
  selector: 'app-edit-clients',
  templateUrl: './edit-clients.component.html',
  styleUrls: ['./edit-clients.component.css']
})
export class EditClientsComponent implements OnInit {

  id : any
  name : any
  lastName : any
  ci : any
  address : any
  phone : any

  clients : any
  constructor(
    private api : ApiService,
    private router : Router,
    private activeParams : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeParams.params.subscribe((params : any) => {
      this.id = params['id']
      console.log(params)
      this.api.getClientsById(this.id).subscribe((res : any) => {
        this.clients = res['data']
        console.log(this.clients)
      })
    })
  }

  updateClientes () {
    this.api.updateClients(this.id, this.clients).subscribe((data : any) => {
      console.log(data);
      Swal.fire({
        position : 'center',
        icon : 'warning',
        title : 'Cliente Actualizado con Exito',
        showConfirmButton : false,
        timer: 1500
      });

      this.router.navigate(['list-client']);
    }, error => {
      Swal.fire({

        icon : 'error',
        title : 'Ooops',
        text : 'No se pudo actualizar '
      })
      console.log(error);
    })
  }

  public validador : any; //esta variable se la puede usar para realizar la validacion en el html del component

  validadorDeCedula(ci: String) {
    let cedulaCorrecta = false;

    if (ci.length == 10)
    {
        let tercerDigito = parseInt(ci.substring(2, 3));
        if (tercerDigito < 6) {

            // El ultimo digito se lo considera dígito verificador
            let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
            let verificador = parseInt(ci.substring(9, 10));
            let suma:number = 0;
            let digito:number = 0;
            for (let i = 0; i < (ci.length - 1); i++) {
                digito = parseInt(ci.substring(i, i + 1)) * coefValCedula[i];
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
            } else {
                cedulaCorrecta = false;
            }
        } else {
            cedulaCorrecta = false;
        }
    } else {
        cedulaCorrecta = false;
    }


  this.validador= cedulaCorrecta;


  }

}
