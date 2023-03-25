export class ServicioCrear {
    nombre: string;
    descripcion: string;
    MontoCosto: number;
    MontoVenta: number;



    constructor(servicio: ServicioCrear){
        if (servicio){
            this.nombre = servicio.nombre;
            this.descripcion = servicio.descripcion;
            this.MontoCosto = servicio.MontoCosto;
            this.MontoVenta = servicio.MontoVenta;
        } else {
            this.nombre = '';
            this.descripcion = '';
            this.MontoCosto = 0;
            this.MontoVenta = 0;
        }
    }
}

export class Servicio {
    id: string;
    nombre: string;
    descripcion: string;
    montoCosto: number;
    montoVenta: number;

    constructor(servicio: Servicio){
        if (servicio){
            this.id = servicio.id;
            this.nombre = servicio.nombre;
            this.descripcion = servicio.descripcion;
            this.montoCosto = servicio.montoCosto;
            this.montoVenta = servicio.montoVenta;
        } else {
            this.nombre = '';
            this.descripcion = '';
            this.montoCosto = 0;
            this.montoVenta = 0;
        }
    }
}

export class ServicioListado {
    id: string;
    nombre: string;
    descripcion: string;
    montoCosto: number;
    montoVenta: number;
    estado

    constructor(servicio: ServicioListado){
        if (servicio){
            this.id = servicio.id;
            this.nombre = servicio.nombre;
            this.descripcion = servicio.descripcion;
            this.montoCosto = servicio.montoCosto;
            this.montoVenta = servicio.montoVenta;
            this.estado = servicio.estado;
        } else {
            this.nombre = '';
            this.descripcion = '';
            this.montoCosto = 0;
            this.montoVenta = 0;
            this.estado = false;
        }
    }
}