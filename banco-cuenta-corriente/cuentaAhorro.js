import { cuenta } from "./cuenta.js";

export class cuentaAhorro extends cuenta{

    constructor(cliente,saldo,numero,agencia){

        super(cliente,saldo,numero,agencia);
       
    }


    retirarDeCuenta(valor){
        
       
          super._retirarDeCuenta(valor,5);  
        
        }

 
    
    }
 
