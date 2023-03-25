import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../Modelos/cliente';
import { IPagination } from '../Modelos/pagination';
import { Servicio, ServicioCrear, ServicioListado } from '../Modelos/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(params?: any): Observable<IPagination>{
    const url = `${environment.server}/api/Servicio`;
    const options = {params};
    return this.http.get<IPagination>(url, options);
  }

  getListado(cliente: Cliente): Observable<Array<ServicioListado>>{
    const url = `${environment.server}/api/Servicio/listadoServicio?cliente=`+cliente.id;
    return this.http.get<Array<ServicioListado>>(url);
  }

  create(servicio: ServicioCrear): Observable<any>{
    const url = `${environment.server}/api/Servicio`;
    return this.http.post<ServicioCrear>(url, servicio);
  }

  update(servicio: Servicio): Observable<any>{
    const url = `${environment.server}/api/Servicio`;
    return this.http.put<Servicio>(url, servicio);
  }
}
