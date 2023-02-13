
import {cliente} from "./Cliente.js"
export class cuentaCorriente {
    #cliente;
    #saldo;
    numero;
    agencia;
    static cantidadCuentas = 0;

    set cliente(valor){
        if (valor instanceof cliente) 
            this.#cliente = valor;
        
            
    }

    get cliente(){
        
        return this.#cliente;
    }

    constructor(cliente,numero,agencia){

        this.cliente = (cliente);
        this.#saldo  = 0;
        this.numero  = numero
        this.agencia = agencia
        cuentaCorriente.cantidadCuentas++;
    }

    depositoEnCuenta(valor) {

        if(valor > 0){

            this.#saldo += valor;

            return this.#saldo
        }
        

    }

    retirarDeCuenta(valor){

        if (valor<=this.#saldo) {
            this.#saldo -= valor;

            return this.#saldo
            
        
        }
        

    }
    verSaldo(){

        return this.#saldo
    }

    transferirParaCuenta(valor,cuentaDestino){
        if (valor<= this.retirarDeCuenta(valor)) {
            
            cuentaDestino.depositoEnCuenta(valor);

            return this.#saldo;
        }else{
            console.log("no tiene suficiente dinero para transferir")
        }
        
        

    }

    
}