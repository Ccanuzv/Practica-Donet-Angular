import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Usuario } from 'src/Modelo/Usuario';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  usuario: Usuario;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      nombre: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      fecha: [null, Validators.required],
    });
    this.usuario = new Usuario(null);
   }

  ngOnInit(): void {
  }

  saveUsuario(){
    this.usuario.nombre = this.form.value.nombre;
    this.usuario.email = this.form.value.email;
    this.usuario.password = this.form.value.password;
    this.usuario.fecha = this.form.value.fecha;
    this.authService.registerUsuario(this.usuario)
    .subscribe(
      data => {
        this.authService.logout();
        this.messageService.add({severity:'success', summary:'Solicitud', detail:'Puede iniciar session!'});
      },
      error => {
        this.messageService.add({severity:'error', summary: 'Error', detail: ' ' + error.error});
        console.log(error.error);
      });
}

salir(){
  this.authService.logout();
}

}
