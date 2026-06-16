let valorpar = Number(prompt("Digite o valor original do par de sapatos: "));

const desconto = valorpar * 0.15
const valorfinal = valorpar - desconto

console.log(`O valor do par com desconto de 15% é R$${valorfinal}`)