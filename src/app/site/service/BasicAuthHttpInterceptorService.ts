import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BasicAuthHttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler) {

    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      httpRequest = httpRequest.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        }
      })
    }
    console.log("SETTED UP THE HEADERSS");
    return httpHandler.handle(httpRequest);
  }
}
