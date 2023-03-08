import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ApiService } from 'src/app/Server/api.service';
import  Swal  from 'sweetalert2';
@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  clients : any
  client = new Client
  page : any
  spinner = true;
  constructor(
    private api : ApiService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.api.getClientes().subscribe((res : any) => {
      this.clients = res['data']
      console.log(res)
      this.spinner = false
    })
  }

  selectClients(id : string){
    this.router.navigate(["/edit-client/", id])
    console.log(id)
  }




}
