export class cliente {

    nombreCliente;
    dniCliente;
    rutCliente;
    #clave;

    constructor(nombreCliente,dniCliente,rutCliente,clave){

        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
        this.#clave = clave

    }

    asignarClave(clave){

        this.#clave = clave
    }

    autenticable(clave){

        return clave == this.#clave;
    }

   
}



