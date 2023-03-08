import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenGuard } from '../token.guard';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { CreateClientsComponent } from './create-clients/create-clients.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { EditCategoriesComponent } from './edit-categories/edit-categories.component';
import { EditClientsComponent } from './edit-clients/edit-clients.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { ExitProductsComponent } from './exit-products/exit-products.component';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ReportsComponent } from './reports/reports.component';
import { SalesProductsComponent } from './sales-products/sales-products.component';



const routes: Routes = [

  {
    path : '',
    children : [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'list-products',
    component: ListProductsComponent,
    //canActivate: [TokenGuard]
  },

  {
    path: 'edit-products/:id',
    component: EditProductsComponent,
    //canActivate: [TokenGuard]
  },
  {
    path: 'create-products',
    component: CreateProductsComponent,
    //canActivate: [TokenGuard]
  },
  {
    path: 'list-categories',
    component: ListCategoriesComponent,
    //canActivate: [TokenGuard]
  },
  {
    path: 'edit-category/:id',
    component: EditCategoriesComponent,
    //canActivate: [TokenGuard]
  },
  {
    path: 'create-category',
    component: CreateCategoriesComponent,
    //canActivate: [TokenGuard]
  },
  {
    path: 'create-client',
    component: CreateClientsComponent,
    //canActivate: [TokenGuard]
  },
  {
    path: 'edit-client/:id',
    component: EditClientsComponent,
    //canActivate: [TokenGuard]
  },
  {
    path: 'list-client',
    component: ListClientsComponent,
    //canActivate: [TokenGuard]
  },
  {
    path: 'reports',
    component: ReportsComponent,
    //canActivate: [TokenGuard]
  },
  {
    path: 'exit-products/:id',
    component: ExitProductsComponent,
    //canActivate: [TokenGuard]
  },
  {
    path: 'sales-products',
    component: SalesProductsComponent,
    //canActivate: [TokenGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PantallasRoutingModule { }
