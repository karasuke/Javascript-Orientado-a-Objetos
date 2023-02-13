
import {cuentaCorriente} from './cuentas/cuentaCorriente.js';
import {cliente} from './Cliente.js';
import { cuentaAhorro } from "./cuentas/cuentaAhorro.js";
import { cuentaNomina } from './cuentas/cuentaNomina.js';
import { director } from './empleados/director.js';
import { empleado } from './empleados/empleado.js';
import { gerente } from './empleados/gerente.js';
import { sistemaAutenticacion } from "./sistemaAutenticacion.js";


const clienteBoris = new cliente("Boris","123123","123145235");

clienteBoris.asignarClave('111');

console.log(sistemaAutenticacion.login(clienteBoris, '111'))

const clientePablo = new cliente("Pablo","1112313","3457235");

const cuentaDeBoris  = new cuentaCorriente(clienteBoris,'1','001');

const cuentadePablo = new cuentaCorriente(clientePablo,'2','001');

const Empleado = new empleado('Boris','123746483',12000);

const Gerente = new gerente('pedro','312349234',13000);

const Director = new director('maria', '12384193478',15000);

console.log(Gerente.verBonificacion())
Empleado.asignarClave('12345');

console.log( sistemaAutenticacion.login(Empleado,'12345'));

















/*cuentaDeBoris.depositoEnCuenta(2000);
console.log(cuentaDeBoris.verSaldo())
cuentaDeBoris._retirarDeCuenta(200,0);
console.log(cuentaDeBoris.verSaldo())
cuentaDeBoris.transferirParaCuenta(100,cuentadePablo)
console.log(cuentadePablo.verSaldo())


const cuentaAhorroBoris = new cuentaAhorro(clienteBoris,0,"1","001");
cuentaAhorroBoris.depositoEnCuenta(1000);
cuentaAhorroBoris.retirarDeCuenta(100)

const cuentaNominaBoris = new cuentaNomina(clienteBoris,0,'1','001');
cuentaNominaBoris.depositoEnCuenta(2500);
console.log(cuentaNominaBoris.verSaldo())
cuentaNominaBoris.retirarDeCuenta(50);
console.log(cuentaNominaBoris.verSaldo())*/




















