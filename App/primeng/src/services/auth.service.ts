import { HttpClient } from '@angular/common/http';
import { Injectable, ReflectiveInjector } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt';
import { Router } from '@angular/router';
// import { Usuario } from 'src/app/modules/core/modelos/usuario';
import Swal from 'sweetalert2';
import { CambioPass } from 'src/Modelo/Pass';
// import { IPagination } from 'src/app/modules/core/modelos/pagination';

const  helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  private loggedIn = new BehaviorSubject<boolean>(false);


  constructor( private http: HttpClient, private router: Router) {
    // this.chechToken();
  }

  
  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  IsloggedIn(url: string){
    const isLogged = sessionStorage.getItem("token");
    if(isLogged == null){
      return false;
    }
    return true;
  }

  login(login:any): Observable<any> {
    const url = `${environment.server}/Core/Usuario/Login`;
    return this.http.post<any>(url, login).pipe(
      map((Response) => {
        console.log(Response);
        this.saveToken(Response.value.token);
        this.loggedIn.next(true);
        return Response;
      }),
      catchError((err) => 
      Swal.fire({
        title: 'Error!',
        text: err.error,
        icon: 'error',
        timer: 2500,
      })
      )
    );

  }

  cambioPassUsuario(usuario: CambioPass): Observable<any>{
    const url = `${environment.server}/Core/Usuario`;
    return this.http.put<CambioPass>(url, usuario);
  }

  solicitudUsuario(email: string): Observable<any>{
    const url = `${environment.server}/Core/Usuario/Email?email=`+email;
    return this.http.post<string>(url, email);
  }

  logout(){
    this.router.navigate(['/login']);
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }

  public chechToken(): void {
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);
    if(isExpired){
      this.logout();
      this.router.navigate(['/login'])
      console.log('expired')
    }else{
      this.loggedIn.next(true);
    }
  }

  private saveToken(token: string): void{
    localStorage.setItem('token', token);
  }
  
  public getToken(): string {
    return localStorage.getItem('token');
  } 
}
