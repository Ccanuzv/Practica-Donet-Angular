import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CambioPass } from 'src/Modelo/Pass';
import { AuthService } from 'src/services/auth.service';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'cambiopass',
  templateUrl: './cambiopass.component.html',
  styleUrls: ['./cambiopass.component.css'],
  providers: [MessageService]
})
export class CambiopassComponent implements OnInit {

  form: FormGroup;
  usuarioCambioPass: CambioPass;
  id: string;

  constructor(
    private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      pass: [null, Validators.required],
      password2: [null, Validators.required],
      fecha: [null, Validators.required],
    });
    this.ruta.queryParams.subscribe(params=>{
      this.id = params['id'];
    })

   }

  ngOnInit(): void {
  }

  saveUsuario(){
    if(this.form.value.pass == this.form.value.password2){

      this.usuarioCambioPass = new CambioPass(null);
      this.usuarioCambioPass.pass = this.form.value.pass;
      this.usuarioCambioPass.token = this.id;
      this.usuarioCambioPass.fecha = this.form.value.fecha;
      this.authService.cambioPassUsuario(this.usuarioCambioPass)
      .subscribe(
        data => {
          this.authService.logout();
          this.messageService.add({severity:'success', summary:'Actualización', detail:'Actualización correcta!'});
        },
        error => {
          this.messageService.add({severity:'error', summary: 'Error', detail: ' ' + error.error});
          console.log(error.error);
        });
    }else{
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Las contraseñas no coinciden'});
    }
  }

  salir(){
    this.authService.logout();
  }


}
