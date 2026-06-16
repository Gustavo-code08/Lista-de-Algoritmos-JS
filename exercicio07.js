let salarioatual = Number(prompt("Digite o salário atual do funcionário: "));

const aumento = salarioatual * 0.20
const salariofinal = salarioatual + aumento

console.log(`O novo salário do funcionário, com o aumento de 20% é de R$${salariofinal}`)