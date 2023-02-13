import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioPassGuard } from '../guards/CambioPassGuard.guard';
import { CambiopassComponent } from './cambiopass/cambiopass.component';
import { LoginComponent} from './login.component';


const routes: Routes = [
  {path: 'login',
  component: LoginComponent},
  // {path: 'Registrar',
  // component: LoginComponent},
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
