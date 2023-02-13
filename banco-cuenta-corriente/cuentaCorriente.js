import { cuenta } from "./cuenta.js";
import {cliente} from "./Cliente.js"
export class cuentaCorriente extends cuenta {
    
    static cantidadCuentas = 0;

    

    constructor(cliente,numero,agencia){

        super(cliente,0,numero,agencia);
        cuentaCorriente.cantidadCuentas++;
    }

    retirarDeCuenta(valor){
       
       
          super._retirarDeCuenta(valor,2);  
        
        }
        

    }

    
