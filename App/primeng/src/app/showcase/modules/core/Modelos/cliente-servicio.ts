export class ClienteServicioCrear {
    clienteId: string;
    servicioId: string;


    constructor(cliente_servicio: ClienteServicioCrear){
        if (cliente_servicio){
            this.clienteId = cliente_servicio.clienteId;
            this.servicioId = cliente_servicio.servicioId;
        } else {
            this.clienteId = '';
            this.servicioId = '';
        }
    }
}