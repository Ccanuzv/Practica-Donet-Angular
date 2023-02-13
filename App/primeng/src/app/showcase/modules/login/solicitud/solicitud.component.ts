import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css'],
  providers: [MessageService]
})
export class SolicitudComponent implements OnInit {

  form: FormGroup;
  email: string;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      email: [null, Validators.required],
    });
   }

  ngOnInit(): void {
  }

  saveUsuario(){
      this.authService.solicitudUsuario(this.form.value.email)
      .subscribe(
        data => {
          this.authService.logout();
          this.messageService.add({severity:'success', summary:'Solicitud', detail:'verifique su bandeja!'});
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
