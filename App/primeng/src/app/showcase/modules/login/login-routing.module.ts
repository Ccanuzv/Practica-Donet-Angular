import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login.component';
import { SolicitudComponent } from './solicitud/solicitud.component';


const routes: Routes = [
  {path: 'login',
  component: LoginComponent},
  {path: 'registrar',
  component: SolicitudComponent},
  // {path: 'CambioPass/:id',
  // component: CambiopassComponent, canActivate:[()=> false]},
  // {path: 'CambioPass',
  // component: CambiopassComponent, canActivate:[()=> false]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
