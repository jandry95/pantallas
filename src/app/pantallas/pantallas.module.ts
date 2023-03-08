import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PantallasRoutingModule } from './pantallas-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { EditCategoriesComponent } from './edit-categories/edit-categories.component';
import { CreateClientsComponent } from './create-clients/create-clients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { EditClientsComponent } from './edit-clients/edit-clients.component';
import { ReportsComponent } from './reports/reports.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SalesComponent } from './sales/sales.component';
import { ExitProductsComponent } from './exit-products/exit-products.component';
import { MenuComponent } from './menu/menu.component';
import { SalesProductsComponent } from './sales-products/sales-products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    ListProductsComponent,
    CreateProductsComponent,
    EditProductsComponent,
    CreateCategoriesComponent,
    ListCategoriesComponent,
    EditCategoriesComponent,
    CreateClientsComponent,
    ListClientsComponent,
    EditClientsComponent,
    ReportsComponent,
    SalesComponent,
    ExitProductsComponent,
    MenuComponent,
    SalesProductsComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PantallasRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class PantallasModule { }
