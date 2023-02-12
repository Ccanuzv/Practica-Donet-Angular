import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoListComponent } from './Componentes/empleados/empleado-list/empleado-list.component';
import { PalondrimoComponent } from './Componentes/palondrimo/palondrimo.component';


const routes: Routes = [
  {path:'Empleado',
  component: EmpleadoListComponent},
  {path:'Polindromo',
  component: PalondrimoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
