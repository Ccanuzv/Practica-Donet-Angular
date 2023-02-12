import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { Empleado } from '../../../Modelos/empelado';
import { EmpleadoService } from '../../../Servicios/empleado.service';

@Component({
  selector: 'empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css'],
  providers: [MessageService]
})
export class EmpleadoListComponent implements OnInit {

  empleados: Array<Empleado>;
  empleado: Empleado;

  title: string = "Crear";
  diag_empleado: boolean = false;

  totalPages = 0;
  numeroPagina = 1;
  ordenamiento = 'nombre';
  tipoOrdenamiento = 'asc';

  Nombre: string;


  constructor(
    private empleadoService: EmpleadoService,
    private messageService: MessageService,
  ) { 
  }

  ngOnInit(): void {
  }

  loadEmpleado(event: LazyLoadEvent){

    if (event !== null) {
      if (event.first == 0 || event.first == 1){
        this.numeroPagina = 1;
      } else {
        this.numeroPagina = event.first/10+1;
      }
      
      if (event.sortField != null) {
        this.ordenamiento = event.sortField;
      }
      if (event.sortOrder === 1) {
        this.tipoOrdenamiento = 'asc';
      } else {
        this.tipoOrdenamiento = 'desc';
      }
    } else {
      this.numeroPagina = 1;
    }

  const params = {
    sortName: this.ordenamiento,
    sortOrder: this.tipoOrdenamiento,
    pageNumber: this.numeroPagina,
  }

  if (this.Nombre) {
    params['nombre'] = this.Nombre;
  }

  this.empleadoService.getEmpleado(params).subscribe(
    data => {
      this.empleados = data.data as Array<Empleado>;
      this.totalPages = data.count;
    },
    error => {
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Error al Cargar datos'});
    console.log(error);
  });
}

nuevoEmpleado(empleado: Empleado){
  this.empleado = empleado as Empleado;
  if (this.empleado == null){
    this.title = "Crear";
    this.empleado = new Empleado(null);
    console.log(this.empleado)
  }else{
    this.title = "Modificar";
  }
  this.diag_empleado = true;
}

cerrarDialogo($event) {
  if ($event){
    this.loadEmpleado(null);
  }
  this.diag_empleado = false;
  this.empleado = null;
}

}
