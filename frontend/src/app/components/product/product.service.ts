import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/produtos";

  constructor(
    private snackbar: MatSnackBar,
    private http: HttpClient
  ) { }

  exibirMensagem(msg: string): void {
    this.snackbar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  readById(id: string): Observable<Product> {
    const url = this.baseUrl + "/" + id;
    return this.http.get<Product>(url);
  }

  update(product: Product): Observable<Product> {
    const url = this.baseUrl + "/" + product.id;
    return this.http.put<Product>(url, product);
  }

  delete(product: Product): Observable<Product> {
    const url = this.baseUrl + "/" + product.id;
    return this.http.delete<Product>(url);
  }
}