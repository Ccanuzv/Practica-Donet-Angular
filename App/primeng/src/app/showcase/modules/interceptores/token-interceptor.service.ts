import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';


@Injectable()

export class TokenInterceptorService implements HttpInterceptor{

  constructor(public auth: AuthService) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
    return next.handle(request);
  
  }
}
