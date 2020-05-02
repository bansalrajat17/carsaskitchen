import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserMasterService } from 'src/app/webapp/service/UserMasterService';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(public userMasterService: UserMasterService) { }

  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    if (!(this.userMasterService.isUserLoggedIn()) && sessionStorage.getItem('token'))
      httpRequest = httpRequest.clone({
        setHeaders: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      });
    return httpHandler.handle(httpRequest);
  }
}
