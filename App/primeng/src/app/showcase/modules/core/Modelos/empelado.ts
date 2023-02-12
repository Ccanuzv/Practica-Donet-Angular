export class Empleado {
    id: string;
    nombre: string;
    dpi: string;
    cantidadHijos: number;
    salario: number;
    bonoDecreto: number;
    fechaCreacion: Date;
    igss: number;
    irtra: number;
    bonoPaternidad: number;
    salarioTotal: number;
    salarioLiquido: number;



    constructor(empleado: Empleado){
        if (empleado){
            this.id = empleado.id;
            this.nombre = empleado.nombre;
            this.dpi = empleado.dpi;
            this.cantidadHijos = empleado.cantidadHijos;
            this.salario = empleado.salario;
            this.bonoDecreto = empleado.bonoDecreto;
            this.fechaCreacion = empleado.fechaCreacion;
            this.igss = empleado.igss;
            this.irtra = empleado.irtra;
            this.bonoPaternidad = empleado.bonoPaternidad;
            this.salarioTotal = empleado.salarioTotal;
            this.salarioLiquido = empleado.salarioLiquido;
        } else {
            this.id = '';
            this.nombre = '';
            this.dpi = '';
            this.cantidadHijos = 0;
            this.salario = 0;
            this.bonoDecreto = 0;
            this.fechaCreacion = null;
            this.igss = 0;
            this.irtra = 0;
            this.bonoPaternidad = 0;
            this.salarioTotal = 0;
            this.salarioLiquido = 0;
        }
    }
}

export class EmpleadoCrear {
    nombre: string;
    dpi: string;
    cantidadHijos: number;
    salario: number;
    bonoDecreto: number;



    constructor(empleado: EmpleadoCrear){
        if (empleado){
            this.nombre = empleado.nombre;
            this.dpi = empleado.dpi;
            this.cantidadHijos = empleado.cantidadHijos;
            this.salario = empleado.salario;
            this.bonoDecreto = empleado.bonoDecreto;
        } else {
            this.nombre = '';
            this.dpi = '';
            this.cantidadHijos = 0;
            this.salario = 0;
            this.bonoDecreto = 0;
        }
    }
}