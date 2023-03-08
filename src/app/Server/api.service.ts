import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { Client } from '../models/client';
import { Product } from '../models/product';
import { Report } from '../models/report';
import { Sales } from '../models/sales';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://localhost:8000/api';
  constructor(
    private http : HttpClient
  ) { }


    getProducts() : Observable<Object> {
      const headers = new HttpHeaders({
        'Accept' : 'application/json',
      });
      return this.http.get<Product[]>(`${this.url}/product`, {headers : headers})
    }

    getCategories(): Observable<Object> {
      const headers = new HttpHeaders({
        'Accept' : 'application/json',
      });
      return this.http.get<Category[]>(`${this.url}/category`, {headers : headers})
    }

    getClientes(): Observable<Object>
    {
      const headers = new HttpHeaders({
        'Accept' : 'application/json',
      });
      return this.http.get<Client[]>(`${this.url}/client`, {headers : headers})
    }

    getCi(ci : string): Observable<Object>
    {

      const headers = new HttpHeaders({
        'Accept' : 'application/json',
      });

      const formData = new FormData();
      formData.append('ci', ci);
      return this.http.post<Object>(`${this.url}/ci`, formData, {headers : headers})
    }


    getReports(): Observable<Object>
    {
      const headers = new HttpHeaders({
        'Accept' : 'application/json',
      });
      return this.http.get<Report[]>(`${this.url}/report`, {headers : headers})
    }

    getSalesProducts(): Observable<Object>
    {
      const headers = new HttpHeaders({
        'Accept' : 'application/json',
      });
      return this.http.get<Sales[]>(`${this.url}/sales`, {headers : headers})
    }

    getProductsById(id : string) : Observable<Object>
    {
      const headers = new HttpHeaders({
        'Accept' : 'application/json',
      });
      return this.http.get<Product[]>(`${this.url}/product/${id}`, {headers : headers})
    }

    getCategoriesById(id : string) : Observable<Object>
    {
      const headers = new HttpHeaders({
        'Accept' : 'application/json',
      });
      return this.http.get<Category[]>(`${this.url}/category/${id}`, {headers : headers})
    }

    getClientsById(id : string) : Observable<Object>
    {
      const headers = new HttpHeaders({
        'Accept' : 'application/json',
      });
      return this.http.get<Client[]>(`${this.url}/client/${id}`, {headers : headers})
    }

    createProduct(productsName: string, productsStock: string, productsDescription: string, category_id: string) : Observable<Object>
    {
      const formData = new FormData();
      formData.append('productsName', productsName);
      formData.append('productsStock', productsStock);
      formData.append('productsDescription', productsDescription);
      formData.append('category_id', category_id);
      const headers = new HttpHeaders({
        'Accept' : 'application/json',
      });

      return this.http.post<Object>(`${this.url}/product`, formData, {headers : headers});

    }

    createCaegory(categoriesName: string): Observable<Object>
    {
      const formData = new FormData();
      formData.append('categoriesName', categoriesName);
      const headers = new HttpHeaders({
        'Accept' : 'application/json',
      });

      return this.http.post<Object>(`${this.url}/category`, formData, {headers : headers});
    }


    createClients(name: string, lastName: string, ci: string, address: string, phone: string): Observable<Object>
    {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('lastName', lastName);
      formData.append('ci', ci);
      formData.append('address', address);
      formData.append('phone', phone);
      const headers = new HttpHeaders({
        'Accept' : 'application/json',
      });

      return this.http.post<Object>(`${this.url}/client`, formData, {headers : headers});
    }

    createSales(data : any): Observable<Object>
    {
      // const formData = new FormData();
      // formData.append('product_id', product_id);
      // formData.append('sales_products', sales_products);
      // formData.append('client_id', client_id);

      const headers = new HttpHeaders({
        'Accept' : 'application/json',
      });

      return this.http.post<Object>(`${this.url}/sales`, data, {headers : headers});
    }

    updateProducts(id: string, data : any)
    {
      const headers = new HttpHeaders({
        'Accept' : 'application/json',
      });

      return this.http.put<Object[]>(`${this.url}/product/${id}`, data, {headers : headers});
    }

    updateCategories(id: string, data : any)
    {
      const headers = new HttpHeaders({
        'Accept' : 'application/json',
      });

      return this.http.put<Object[]>(`${this.url}/category/${id}`, data, {headers : headers});
    }

    updateClients(id: string, data : any)
    {
      const headers = new HttpHeaders({
        'Accept' : 'application/json',
      });

      return this.http.put<Object[]>(`${this.url}/client/${id}`, data, {headers : headers});
    }

    deleteProducts(id : string): Observable<Object>
    {
      const headers = new HttpHeaders({
        'Accept' : 'application/json',
      });

      return this.http.delete<Object[]>(`${this.url}/product/${id}`, {headers : headers});
    }

    deleteCategories(id : string): Observable<Object>
    {
      const headers = new HttpHeaders({
        'Accept' : 'application/json',
      });

      return this.http.delete<Object[]>(`${this.url}/category/${id}`, {headers : headers});
    }



}
