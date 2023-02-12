import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PalindromoService } from '../../Servicios/palindromo.service';

@Component({
  selector: 'palondrimo',
  templateUrl: './palondrimo.component.html',
  styleUrls: ['./palondrimo.component.css'],
  providers: [MessageService]
})
export class PalondrimoComponent implements OnInit {
  texto:string;
  listado: Array<string>;
  constructor(
    private messageService: MessageService,
    private palindromoService: PalindromoService
  ) { }

  ngOnInit(): void {
  }

  loadBuscar(){
  const params = {
    texto: this.texto,
  }
  this.palindromoService.getBuscar(params).subscribe(
    data => {
      this.listado = data as Array<string>;
      console.log(this.listado);
    },
    error => {
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Error al Cargar datos'});
    console.log(error);
  });
}

}
