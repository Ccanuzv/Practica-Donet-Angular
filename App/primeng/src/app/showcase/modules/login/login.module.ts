import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ListboxModule} from 'primeng/listbox';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {FormsModule} from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { AppComponent } from '../../app.component';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [
    LoginComponent
  ],
  
  imports: [
    //BrowserModule,
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    ListboxModule,
    CascadeSelectModule,
    FormsModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    InputTextModule,
    PasswordModule,
    PanelModule,
    //BrowserAnimationsModule,
    DividerModule,
  ],
  bootstrap: [AppComponent],
})

export class LoginModule { }
