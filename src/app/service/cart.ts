import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getCart() {
    return this.http
      .get(this.apiURL + '/cart')
      .pipe(retry(1), catchError(this.handleError));
  }

  createCart(cart: any) {
    return this.http
      .post(
        this.apiURL + '/cart',
        JSON.stringify(cart),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  updateCart(id: any, cart: any) {
    return this.http
      .put(
        this.apiURL + '/cart/' + id,
        JSON.stringify(cart),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteCart(id: any) {
    return this.http
      .delete(this.apiURL + '/cart/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}