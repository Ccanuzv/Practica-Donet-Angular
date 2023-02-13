import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioPassGuard } from '../../guards/CambioPassGuard.guard';
import { CambiopassComponent } from './cambiopass.component';


const routes: Routes = [
  {path: 'Pass:id',
  component: CambiopassComponent},
  {path: 'Pass',
  component: CambiopassComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CambioRoutingModule { }