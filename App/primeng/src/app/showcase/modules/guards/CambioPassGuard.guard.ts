import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';
// import { Usuario, UsuarioOut } from '../core/modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class CambioPassGuard implements CanActivate {
  
  // usuario: UsuarioOut;


  constructor(private ruta: Router, private authSvc: AuthService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.ruta.navigate(['/Cambio/Pass'])
      return false;
  }
}
