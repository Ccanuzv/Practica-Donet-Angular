import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Cliente, ClienteCrear } from '../../../Modelos/cliente';
import { ClienteService } from '../../../Servicios/cliente.service';

@Component({
  selector: 'cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css'],
  providers: [MessageService]
})
export class ClienteEditComponent implements OnInit {

  @Input() cliente: Cliente;
  @Output() outForm: EventEmitter<boolean> = new EventEmitter();

  clienteCrear: ClienteCrear;
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private messageService: MessageService,
  ) { 
    this.form = this.fb.group({
      nombre: [null, Validators.required],
      nit: [null, Validators.required],
      direccion: [null, Validators.required],
      telefono: [null, Validators.required],
      email: [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  saveCliente(){

    if(this.cliente.id){
      this.cliente.nombre = this.form.value.nombre;
      this.cliente.nit = this.form.value.nit;
      this.cliente.direccion = this.form.value.direccion;
      this.cliente.telefono = this.form.value.telefono;
      this.cliente.email = this.form.value.email;

      this.clienteService.update(this.cliente)
      .subscribe(
        data => {
          this.messageService.add({severity:'success', summary:'Actualización', detail:'Actualización correcta!'});
          this.return(true);
        },
        error => {
          console.log(error);
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Error al actualizar'});
        });
    }else {
      this.clienteCrear = new ClienteCrear(null);
      this.clienteCrear.nombre = this.form.value.nombre;
      this.clienteCrear.nit = this.form.value.nit;
      this.clienteCrear.direccion = this.form.value.direccion;
      this.clienteCrear.telefono = this.form.value.telefono;
      this.clienteCrear.email = this.form.value.email;
      this.clienteService.create(this.clienteCrear)
      .subscribe(
        data => {
          this.messageService.add({severity:'success', summary:'Crear', detail:'Cliente creado!'});
          this.return(true);
        },
        error => {
          this.messageService.add({severity:'error', summary: 'Error', detail: error.error});
          console.log(error.error);
        });
    }
    } 


  ngOnChanges(changes: SimpleChanges) {
    this.cliente = changes.cliente.currentValue as Cliente;
    if (this.cliente.id != ''){
      this.form.patchValue({
        nombre: this.cliente.nombre,
        nit: this.cliente.nit,
        direccion: this.cliente.direccion,
        telefono: this.cliente.telefono,
        email: this.cliente.email
      });
    }
  }

  return(estado: boolean){
    this.outForm.emit(estado);
  }

  limpiarFormulario(){
    this.form = this.fb.group({
      nombre: [null, Validators.required],
      direccion: [null, Validators.required],
      telefono: [null, Validators.required],
      email: [null, Validators.required],
    });
  }

}
