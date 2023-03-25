import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { Cliente } from '../../../Modelos/cliente';
import { ClienteService } from '../../../Servicios/cliente.service';

@Component({
  selector: 'cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css'],
  providers: [MessageService]
})
export class ClienteListComponent implements OnInit {

  clientes: Array<Cliente>;
  cliente: Cliente;

  title: string = "Crear";
  diag_cliente: boolean = false;
  diag_servicio: boolean = false;

  totalPages = 0;
  numeroPagina = 1;
  ordenamiento = 'nombre';
  tipoOrdenamiento = 'asc';

  Nombre: string;

  constructor(
    private clienteService: ClienteService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
  }

  loadCliente(event: LazyLoadEvent){

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

  this.clienteService.getAll(params).subscribe(
    data => {
      this.clientes = data.data as Array<Cliente>;
      this.totalPages = data.count;
    },
    error => {
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Error al Cargar datos'});
    console.log(error);
  });
}

nuevoCliente(cliente: Cliente){
  this.cliente = cliente as Cliente;
  if (this.cliente == null){
    this.title = "Crear";
    this.cliente = new Cliente(null);
    console.log(this.cliente)
  }else{
    this.title = "Modificar";
  }
  this.diag_cliente = true;
}

nuevoServicio(cliente: Cliente){
  this.cliente = cliente as Cliente;
  this.title = "Listado Servicios del Cliente "+this.cliente.nombre;
  this.diag_servicio = true; 
}

cerrarDialogo($event) {
  if ($event){
    this.loadCliente(null);
  }
  this.diag_cliente = false;
  this.diag_servicio = false;
  this.cliente = null;
}

}
