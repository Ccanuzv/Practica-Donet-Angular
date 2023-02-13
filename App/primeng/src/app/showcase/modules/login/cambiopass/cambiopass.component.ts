import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CambioPass } from 'src/Modelo/Pass';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'cambiopass',
  templateUrl: './cambiopass.component.html',
  styleUrls: ['./cambiopass.component.css'],
  providers: [MessageService]
})
export class CambiopassComponent implements OnInit {

  form: FormGroup;
  usuarioCambioPass: CambioPass;

  constructor(
    private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      password: [null, Validators.required],
      password2: [null, Validators.required],
      edad: [null, Validators.required],
    });
    this.ruta.params.subscribe(params=>{
      this.ruta = params['id'];
    })
   }

  ngOnInit(): void {
  }

  saveUsuario(){
    if(this.form.value.password == this.form.value.password2){
      // this.usuarioCambioPass = new UsuarioCambioPass(null);
      // this.usuarioCambioPass.password = this.form.value.password;
      this.authService.cambioPassUsuario(this.usuarioCambioPass)
      .subscribe(
        data => {
          this.authService.logout();
          this.messageService.add({severity:'success', summary:'Actualización', detail:'Actualización correcta!'});
        },
        error => {
          this.messageService.add({severity:'error', summary: 'Error', detail: ' ' + error});
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
