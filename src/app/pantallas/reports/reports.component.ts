import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Server/api.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reports : any;
  page : any;
  constructor(
    private api : ApiService,
    private router : Router
  ) {  }

  ngOnInit(): void {
    this.api.getReports().subscribe((res : any) => {
      this.reports = res['data'];
      console.log(this.reports, 'hola')
    })
  }

}
