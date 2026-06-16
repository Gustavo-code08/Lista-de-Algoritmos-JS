let distancia = Number(prompt("Digite a distância em km da viagem: "));
let consumo = Number(prompt("Digite o consumo do carro: "));
let precogas = Number(prompt("Digite o preço da gasolina: "));

const calculo1 = distancia/consumo
const calculo2 = calculo1*precogas

console.log(`O valor total gasto foi de R$${calculo2}`)