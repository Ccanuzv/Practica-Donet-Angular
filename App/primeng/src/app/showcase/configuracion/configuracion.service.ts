import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  public appConfig: any;
  constructor() { 
    this.appConfig = {
      server:  environment.server,
      apiUrl: environment.server+environment.apiUrl
    };
  }
}
