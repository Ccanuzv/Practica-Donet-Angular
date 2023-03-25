import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Cliente } from '../../../Modelos/cliente';
import { ClienteServicioCrear } from '../../../Modelos/cliente-servicio';
import { ServicioListado } from '../../../Modelos/servicio';
import { ClienteService } from '../../../Servicios/cliente.service';
import { ServicioService } from '../../../Servicios/servicio.service';

@Component({
  selector: 'cliente-servicio',
  templateUrl: './cliente-servicio.component.html',
  styleUrls: ['./cliente-servicio.component.css'],
  providers: [MessageService]
})
export class ClienteServicioComponent implements OnInit {

  @Input() cliente: Cliente;
  @Output() outForm: EventEmitter<boolean> = new EventEmitter();
  servicios: Array<ServicioListado>;
  cliente_servicio: ClienteServicioCrear
  
  constructor(
    private clienteService: ClienteService,
    private servicioService: ServicioService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.loadServicio();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.cliente = changes.cliente.currentValue as Cliente;
  }

  loadServicio(){
  this.servicioService.getListado(this.cliente).subscribe(
    data => {
      this.servicios = data as Array<ServicioListado>;
    },
    error => {
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Error al Cargar datos'});
    console.log(error);
  });
}

saveClienteServicio(servicio: ServicioListado){
    this.cliente_servicio = new ClienteServicioCrear(null);
    this.cliente_servicio.clienteId = this.cliente.id;
    this.cliente_servicio.servicioId = servicio.id;
    this.clienteService.createClienteServcio(this.cliente_servicio)
    .subscribe(
      data => {
        this.loadServicio();
        this.messageService.add({severity:'success', summary:'Crear', detail:'Se Agregado el servicio!'});
      },
      error => {
        this.messageService.add({severity:'error', summary: 'Error', detail: error.error});
        console.log(error.error);
      });
  }

}
