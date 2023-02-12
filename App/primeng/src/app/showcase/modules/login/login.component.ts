import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formLogin: FormGroup;
  url = `${environment.server}`
  logo: string

  constructor(
    // private authservice: AuthService,
    private fd: FormBuilder,
    private ruta: Router
  ) { }

  ngOnInit(): void {
    this.logo = localStorage.getItem('logo');
    this.formLogin = this.fd.group({
      usuario: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  login(){ 
    const datos = this.formLogin.value
    // this.authservice.login(datos).subscribe(data => {
    //   if(data){
    //     this.ruta.navigate(['/LoginEstablecimiento/loginEstablecimiento']);
    //   }
    // });
}

}
