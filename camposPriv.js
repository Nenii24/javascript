class CuentaBancaria {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    consultarSaldo() {
        return this.#saldo;
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
        } else {
            console.log("La cantidad debe ser positiva.");
        }
    }
}

const cuenta = new CuentaBancaria(500);

console.log(cuenta.consultarSaldo());

cuenta.depositar(200);

console.log(cuenta.consultarSaldo());