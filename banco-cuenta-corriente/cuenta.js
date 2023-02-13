export class cuenta {

    #cliente;
    #saldo;
   

    constructor(cliente, saldo, numero, agencia){
        
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    set cliente(valor){
        if (valor instanceof cliente) 
            this.#cliente = valor;
        
            
    }

    get cliente(){
        
        return this.#cliente;
    }


    depositoEnCuenta(valor) {

        if(valor > 0){

            this.#saldo += valor;

            return this.#saldo
        }
        

    }

    retirarDeCuenta(valor){
        
            _retirarDeCuenta(valor,0)
        
        }

    _retirarDeCuenta(valor, comision){
        valor = valor* (1+comision/100);
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