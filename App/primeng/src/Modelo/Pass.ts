export class CambioPass {

    passwordActual: string;
    password: string;
    edad: Date;
    constructor(usuario: CambioPass){
        if (usuario){
            this.password = usuario.password;
            this.edad = usuario.edad;
        } else {
            this.password = '';
            this.edad = new Date();
        }
    }
}