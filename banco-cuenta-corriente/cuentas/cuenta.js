export class cuenta {

    #cliente;
    #saldo;
   

    constructor(cliente, saldo, numero, agencia){
        
        if (this.constructor == cuenta) {
            throw new error('no se debe instanciar objetos de la clase cuenta')
        }
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
        
        throw new error('debe implementar el metodo en su clase')
        
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

    //validarRetiro(valor){

        //if (this.#saldo - valor < 0) {
            //console.log('saldo insuficiente')
        //}else{
            //console.log(`Transferencia existosa de $${valor}`)
       // }
   // }

    transferirParaCuenta(valor,cuentaDestino){
        
        if (this.#saldo - valor < 0) {
            console.log("Saldo insuficiente");
        } else {
            this.#saldo -= valor;
            cuentaDestino.depositoEnCuenta(valor);
            console.log(`Transferencia de $${valor} exitosa. Nuevo saldo: $${this.#saldo}`);
        }
        
        

    }


}