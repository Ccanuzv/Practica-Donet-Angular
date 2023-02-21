import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login.component';
import { RegisterComponent } from './register/register.component';
import { SolicitudComponent } from './solicitud/solicitud.component';


const routes: Routes = [
  {path: 'login',
  component: LoginComponent},
  {path: 'solicitud',
  component: SolicitudComponent},
  {path: 'registrar',
  component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
