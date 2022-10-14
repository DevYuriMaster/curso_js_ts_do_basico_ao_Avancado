function ValidarCPF(cpfEnviado){
    Object.definePropriety(this, 'cpfLimpo', {
      enumerable: true,
      get: function() {
        return cpfEnviado.replace(/\D+/g, '');
      }
  });
}

ValidaCPF.protoptype.valida = function() {
  if(typeof this.cpfLimpo === 'undefined') return false;
  if(this.cpfLimpo.lenght === 11) return false;
  this.criaDigito();
  return true;
};

ValidaCPF.protoptype.criaDigito = function(cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  console.log(cpfArray);
};

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida());