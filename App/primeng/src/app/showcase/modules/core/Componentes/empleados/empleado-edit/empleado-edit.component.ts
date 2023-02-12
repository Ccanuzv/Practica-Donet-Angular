import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Empleado, EmpleadoCrear } from '../../../Modelos/empelado';
import { EmpleadoService } from '../../../Servicios/empleado.service';

@Component({
  selector: 'empleado-edit',
  templateUrl: './empleado-edit.component.html',
  styleUrls: ['./empleado-edit.component.css'],
  providers: [MessageService]
})
export class EmpleadoEditComponent implements OnInit {

  @Input() empleado: Empleado;
  @Output() outForm: EventEmitter<boolean> = new EventEmitter();

  empleadoCrear: EmpleadoCrear;
  form: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private messageService: MessageService,
  ) { 
    this.form = this.fb.group({
      nombre: [null, Validators.required],
      dpi: [null, Validators.required],
      cantidadHijos: [null, Validators.required],
      salario: [null, Validators.required],
      bonoDecreto: [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  saveEmpleado(){
    this.empleadoCrear = new EmpleadoCrear(null);
    this.empleadoCrear.nombre = this.form.value.nombre;
    this.empleadoCrear.dpi = this.form.value.dpi;
    this.empleadoCrear.cantidadHijos = this.form.value.cantidadHijos;
    this.empleadoCrear.salario = this.form.value.salario;
    this.empleadoCrear.bonoDecreto = this.form.value.bonoDecreto;
    this.empleadoService.createEmpleado(this.empleadoCrear)
    .subscribe(
      data => {
        this.messageService.add({severity:'success', summary:'Crear', detail:'Empleado creado!'});
        this.return(true);
      },
      error => {
        this.messageService.add({severity:'error', summary: 'Error', detail: error.error});
        console.log(error.error);
      });
    } 


  ngOnChanges(changes: SimpleChanges) {
    this.empleado = changes.empleado.currentValue as Empleado;
    if (this.empleado.id != ''){
      this.form.patchValue({
        nombre: this.empleado.nombre,
        dpi: this.empleado.dpi,
        cantidadHijos: this.empleado.cantidadHijos,
        salario: this.empleado.salario,
        bonoDecreto: this.empleado.bonoDecreto
      });
    }
  }

  return(estado: boolean){
    this.outForm.emit(estado);
  }

  limpiarFormulario(){
    this.form = this.fb.group({
      nombre: [null, Validators.required],
      dpi: [null, Validators.required],
      cantidadHijos: [null, Validators.required],
      salario: [null, Validators.required],
      bonoDecreto: [null, Validators.required],
    });
  }

}
