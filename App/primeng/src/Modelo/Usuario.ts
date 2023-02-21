export class Usuario {

    nombre: string;
    email: string;
    password: string;
    fecha: Date;
    constructor(usuario: Usuario){
        if (usuario){
            this.nombre = usuario.nombre;
            this.fecha = usuario.fecha;
            this.email = usuario.email;
        } else {
            this.nombre= '';
            this.email = '';
            this.password = '';
            this.fecha = new Date();
        }
    }
}
