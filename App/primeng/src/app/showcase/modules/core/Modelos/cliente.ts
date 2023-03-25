export class ClienteCrear {
    nombre: string;
    nit: string;
    direccion: string;
    telefono: string;
    email: string;



    constructor(cliente: ClienteCrear){
        if (cliente){
            this.nombre = cliente.nombre;
            this.nit = cliente.nit;
            this.direccion = cliente.direccion;
            this.telefono = cliente.telefono;
            this.email = cliente.email;
        } else {
            this.nombre = '';
            this.nit = '';
            this.direccion = '';
            this.telefono = '';
            this.email = '';
        }
    }
}

export class Cliente {
    id: string;
    nombre: string;
    nit: string;
    direccion: string;
    telefono: string;
    email: string;
    fechaCreacion: Date;
    estado: boolean;




    constructor(cliente: Cliente){
        if (cliente){
            this.id = cliente.id;
            this.nombre = cliente.nombre;
            this.nit = cliente.nit;
            this.direccion = cliente.direccion;
            this.telefono = cliente.telefono;
            this.email = cliente.email;
            this.fechaCreacion = cliente.fechaCreacion;
            this.estado = cliente.estado;
        } else {
            this.nombre = '';
            this.nit = '';
            this.direccion = '';
            this.telefono = '';
            this.email = '';
            this.estado = false;
        }
    }
}