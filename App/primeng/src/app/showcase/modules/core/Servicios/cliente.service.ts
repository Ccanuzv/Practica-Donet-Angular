import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPagination } from '../Modelos/pagination';
import { environment } from 'src/environments/environment';
import { Cliente, ClienteCrear } from '../Modelos/cliente';
import { ClienteServicioCrear } from '../Modelos/cliente-servicio';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(params?: any): Observable<IPagination>{
    const url = `${environment.server}/api/Cliente`;
    const options = {params};
    return this.http.get<IPagination>(url, options);
  }

  create(cliente: ClienteCrear): Observable<any>{
    const url = `${environment.server}/api/Cliente`;
    return this.http.post<ClienteCrear>(url, cliente);
  }

  update(cliente: Cliente): Observable<any>{
    const url = `${environment.server}/api/Cliente`;
    return this.http.put<Cliente>(url, cliente);
  }

  createClienteServcio(cliente_servicio: ClienteServicioCrear): Observable<any>{
    const url = `${environment.server}/api/ClienteServicio`;
    return this.http.post<ClienteServicioCrear>(url, cliente_servicio);
  }
    
}
