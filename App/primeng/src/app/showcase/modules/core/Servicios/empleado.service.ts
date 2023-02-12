import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empleado, EmpleadoCrear } from '../Modelos/empelado';
import { IPagination } from '../Modelos/pagination';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(
    private http: HttpClient,
  ) { }

  getEmpleado(params?: any): Observable<IPagination>{
    const url = `${environment.server}/Core/Empleado`;
    const options = {params};
    return this.http.get<IPagination>(url, options);
  }

  createEmpleado(empleado: EmpleadoCrear): Observable<any>{
    const url = `${environment.server}/Core/Empleado`;
    return this.http.post<EmpleadoCrear>(url, empleado);
  }
}
