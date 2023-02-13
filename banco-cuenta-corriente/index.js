
import {cuentaCorriente} from './cuentaCorriente.js';
import {cliente} from './Cliente.js';





const clienteBoris = new cliente("Boris","123123","123145235");


const clientePablo = new cliente("Pablo","1112313","3457235");



const cuentaDeBoris  = new cuentaCorriente(clienteBoris,'1','001');



const cuentadePablo = new cuentaCorriente(clientePablo,'2','001');


cuentaDeBoris.depositoEnCuenta(2000);
cuentaDeBoris.transferirParaCuenta(100,cuentadePablo)


console.log(cuentaCorriente.cantidadCuentas)










//let saldo = cuentaDeBoris.verSaldo();
//let saldo2 = cuentadePablo.verSaldo();
//console.log(cuentaDeBoris.cliente)
//console.log("el saldo de boris: " + saldo)
//console.log(cuentadePablo.cliente)
//console.log("el saldo de pablo: " + saldo2)






