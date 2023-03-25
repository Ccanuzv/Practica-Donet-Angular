import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './Componentes/cliente/cliente-list/cliente-list.component';
import { EmpleadoListComponent } from './Componentes/empleados/empleado-list/empleado-list.component';
import { PalondrimoComponent } from './Componentes/palondrimo/palondrimo.component';
import { ServicioListComponent } from './Componentes/servicio/servicio-list/servicio-list.component';


const routes: Routes = [
  {path:'Empleado',
  component: EmpleadoListComponent},
  {path:'Polindromo',
  component: PalondrimoComponent},
  {path:'Cliente',
  component: ClienteListComponent},
  {path:'Servicio',
  component: ServicioListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
