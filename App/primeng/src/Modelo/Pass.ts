export class CambioPass {

    token: string;
    pass: string;
    fecha: Date;
    constructor(usuario: CambioPass){
        if (usuario){
            this.pass = usuario.pass;
            this.fecha = usuario.fecha;
            this.token = usuario.token;
        } else {
            this.pass= '';
            this.token = '';
            this.fecha = new Date();
        }
    }
}
