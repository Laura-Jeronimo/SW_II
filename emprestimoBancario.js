class ContaBancaria {
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
    }
  
    sacar(valor) {
      if (valor <= this.saldo + this.limite) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
      } else {
        console.log("Saldo insuficiente.");
      }
    }
  
    consultarSaldo() {
      console.log(`Saldo atual: R$${this.saldo.toFixed(2)}`);
    }
  
    calcularEmprestimo(valorEmprestimo, taxaJuros, meses) {
      const juros = valorEmprestimo * taxaJuros / 100 * meses;
      const valorTotal = valorEmprestimo + juros;
      const valorParcela = valorTotal / meses;
      console.log(`Valor total do empréstimo: R$${valorTotal.toFixed(2)}`);
      console.log(`Valor da parcela mensal: R$${valorParcela.toFixed(2)}`);
    }
  }
  
  const conta = new ContaBancaria;
  conta.depositar(4000);
  conta.sacar(980);
  conta.consultarSaldo();
  conta.calcularEmprestimo(5000, 10, 12);
  