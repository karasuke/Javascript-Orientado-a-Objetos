
import {cuentaCorriente} from './cuentaCorriente.js';
import {cliente} from './Cliente.js';
import { cuentaAhorro } from "./cuentaAhorro.js";







const clienteBoris = new cliente("Boris","123123","123145235");


const clientePablo = new cliente("Pablo","1112313","3457235");



const cuentaDeBoris  = new cuentaCorriente(clienteBoris,'1','001');



const cuentadePablo = new cuentaCorriente(clientePablo,'2','001');


cuentaDeBoris.depositoEnCuenta(2000);
cuentaDeBoris.transferirParaCuenta(100,cuentadePablo)


const cuentaAhorroBoris = new cuentaAhorro(clienteBoris,0,"1","001");
cuentaAhorroBoris.depositoEnCuenta(1000);
cuentaAhorroBoris.retirarDeCuenta(100)
console.log(cuentaAhorroBoris.verSaldo())








//let saldo = cuentaDeBoris.verSaldo();
//let saldo2 = cuentadePablo.verSaldo();
//console.log(cuentaDeBoris.cliente)
//console.log("el saldo de boris: " + saldo)
//console.log(cuentadePablo.cliente)
//console.log("el saldo de pablo: " + saldo2)






