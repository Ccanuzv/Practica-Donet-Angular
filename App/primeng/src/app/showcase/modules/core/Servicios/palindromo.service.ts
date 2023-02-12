import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PalindromoService {

  constructor(
    private http: HttpClient,
  ) { }

  getBuscar(params?: any): Observable<Array<string>>{
    const url = `${environment.server}/Core/Palindromo`;
    const options = {params};
    return this.http.get<Array<string>>(url, options);
  }

}
