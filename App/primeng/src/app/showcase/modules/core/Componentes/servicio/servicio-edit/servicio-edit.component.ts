import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Servicio, ServicioCrear } from '../../../Modelos/servicio';
import { ServicioService } from '../../../Servicios/servicio.service';

@Component({
  selector: 'servicio-edit',
  templateUrl: './servicio-edit.component.html',
  styleUrls: ['./servicio-edit.component.css']
})
export class ServicioEditComponent implements OnInit {

  @Input() servicio: Servicio;
  @Output() outForm: EventEmitter<boolean> = new EventEmitter();

  servicioCrear: ServicioCrear;
  form: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private servicioService: ServicioService,
    private messageService: MessageService,
  ) { 
    this.form = this.fb.group({
      nombre: [null, Validators.required],
      descripcion: [null, Validators.required],
      montoCosto: [null, Validators.required],
      montoVenta: [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  saveServicio(){

    if(this.servicio.id){
      this.servicio.nombre = this.form.value.nombre;
      this.servicio.descripcion = this.form.value.descripcion;
      this.servicio.montoCosto = this.form.value.montoCosto;
      this.servicio.montoVenta = this.form.value.montoVenta;

      this.servicioService.update(this.servicio)
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
      this.servicioCrear = new ServicioCrear(null);
      this.servicioCrear.nombre = this.form.value.nombre;
      this.servicioCrear.descripcion = this.form.value.descripcion;
      this.servicioCrear.MontoCosto = this.form.value.montoCosto;
      this.servicioCrear.MontoVenta = this.form.value.montoVenta;
      this.servicioService.create(this.servicioCrear)
      .subscribe(
        data => {
          this.messageService.add({severity:'success', summary:'Crear', detail:'Servicio creado!'});
          this.return(true);
        },
        error => {
          this.messageService.add({severity:'error', summary: 'Error', detail: error.error});
          console.log(error.error);
        });
    }
    } 


  ngOnChanges(changes: SimpleChanges) {
    this.servicio = changes.servicio.currentValue as Servicio;
    if (this.servicio.id != ''){
      this.form.patchValue({
        nombre: this.servicio.nombre,
        descripcion: this.servicio.descripcion,
        montoCosto: this.servicio.montoCosto,
        montoVenta: this.servicio.montoVenta,
      });
    }
  }

  return(estado: boolean){
    this.outForm.emit(estado);
  }

}
