import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, LazyLoadEvent, MessageService } from 'primeng/api';
import { Servicio } from '../../../Modelos/servicio';
import { ServicioService } from '../../../Servicios/servicio.service';

@Component({
  selector: 'servicio-list',
  templateUrl: './servicio-list.component.html',
  styleUrls: ['./servicio-list.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class ServicioListComponent implements OnInit {

  servicios: Array<Servicio>;
  servicio: Servicio;

  title: string = "Crear";
  diag_servicio: boolean = false;

  totalPages = 0;
  numeroPagina = 1;
  ordenamiento = 'nombre';
  tipoOrdenamiento = 'asc';

  Nombre: string;

  constructor(
    private servicioService: ServicioService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
  }

  loadServicio(event: LazyLoadEvent){

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

  this.servicioService.getAll(params).subscribe(
    data => {
      this.servicios = data.data as Array<Servicio>;
      this.totalPages = data.count;
    },
    error => {
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Error al Cargar datos'});
    console.log(error);
  });
}

nuevoServicio(servicio: Servicio){
  this.servicio = servicio as Servicio;
  if (this.servicio == null){
    this.title = "Crear";
    this.servicio = new Servicio(null);
  }else{
    this.title = "Modificar";
  }
  this.diag_servicio = true;
}

cerrarDialogo($event) {
  if ($event){
    this.loadServicio(null);
  }
  this.diag_servicio = false;
  this.servicio = null;
}


eliminarServicio(servicio: Servicio) {
  this.confirmationService.confirm({
      message: '¿Está seguro de que desea continuar?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.servicioService.delete(servicio.id).subscribe(
          data => {
            this.messageService.add({severity:'success', summary:'Crear', detail:'Servicio Desactivado!'});
            this.loadServicio(null);
          },
          error => {
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Error al Cargar datos'});
          console.log(error);
        });
      },
      reject: (type) => {
          // switch (type) {
          //     case ConfirmEventType.REJECT:
          //         this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
          //         break;
          //     case ConfirmEventType.CANCEL:
          //         this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
          //         break;
          // }
      }
  });
}

}
