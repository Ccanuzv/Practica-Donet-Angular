import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import {StyleClassModule} from 'primeng/styleclass';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {FileUploadModule} from 'primeng/fileupload';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ListboxModule} from 'primeng/listbox';
import {InputMaskModule} from 'primeng/inputmask';
import {PasswordModule} from 'primeng/password';
import { ChipModule } from 'primeng/chip';


import { CoreRoutingModule } from './core-routing.module';

import { AppComponent } from 'src/app/showcase/app.component';
import { EmpleadosComponent } from './Componentes/empleados/empleados.component';
import { EmpleadoManagerComponent } from './Componentes/empleados/empleado-manager/empleado-manager.component';
import { EmpleadoEditComponent } from './Componentes/empleados/empleado-edit/empleado-edit.component';
import { EmpleadoListComponent } from './Componentes/empleados/empleado-list/empleado-list.component';
import { PalondrimoComponent } from './Componentes/palondrimo/palondrimo.component';
import { GlobalComponenteModule } from '../global-componente/global-componente.module';


@NgModule({
  declarations: [
    
  
    EmpleadosComponent,
             EmpleadoManagerComponent,
             EmpleadoEditComponent,
             EmpleadoListComponent,
             PalondrimoComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    StyleClassModule,
    ToolbarModule,
    TableModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    DialogModule,
    DropdownModule,
    InputNumberModule,
    FileUploadModule,
    InputSwitchModule,
    CascadeSelectModule,
    ListboxModule,
    InputMaskModule,
    PasswordModule,
    ChipModule,
    GlobalComponenteModule
  ],
  bootstrap: [AppComponent]
})
export class CoreModule { }
