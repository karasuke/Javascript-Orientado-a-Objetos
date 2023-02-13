import { cuenta } from "./cuenta.js";

export class cuentaNomina extends cuenta {

    constructor(cliente,saldo,numero,agencia){

        super(cliente,saldo,numero,agencia);
       
    }

    retirarDeCuenta(valor){
       
       
        super._retirarDeCuenta(valor,1);  
      
      }

}