function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;        
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }   
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag/C.: ${this.agencia} / ${this.conta} | `  +
    `Saldo: R$${this.saldo.toFixed(2)}`
    
    );
};

const conta1 = new Conta(1556, 001, 2000);
console.log(conta1);
conta1.depositar(300);
conta1.sacar(20);
conta1.sacar(3000);



