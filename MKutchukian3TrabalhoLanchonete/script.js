/* Desenvolva um programa em js, estilo calculadora, em que o usuário deverá digitar dois números,
escolher a operação que deseja fazer: soma, subtração, divisão ou multiplicação; Esse algoritmo executará
um calculo, conforme a escolha do usuário
*/

const prompt = require("prompt-sync")();

console.log("----------- Menu ------------");
console.log("1 - Hamburguer   -   R$ 14.99");
console.log("2 - Suco         -   R$ 08.00");
console.log("3 - Café         -   R$ 09.00");
console.log("4 - Misto Quente -   R$ 12.99");
console.log("5 - Bauru        -   R$ 12.99");
console.log("6 - Sair");

pedido = prompt("Insira a sua escolha: ")

console.log("Insira uma forma de pagamento:");
console.log("1  - Cartão (5% de taxa)");
console.log("2  - Pagar em dinheiro (5% de DESCONTO)");
pagamento = prompt("Insira a sua escolha: ");

if (pagamento == '1') {
    console.log("Você escolheu pagar com o cartão, e terá que pagar uma taxa de 5%")
    desconto = 1.05
    pagamento = "Cartão"
} else {
    console.log("Você escolheu pagar em dinheiro e ganhou 5% de DESCONTO!")
    pagamento =  "Dinheiro"
    desconto = 0.95
}

switch (pedido) {
    case '1':
        console.log("Seu Pedido:                     Hamburguer")
        console.log("Forma de pagamento:            ", pagamento)
        console.log("Total a pagar:                 ", 14.99 * desconto)
        break
    case '2':
        console.log("Seu Pedido:                     Suco")
        console.log("Forma de pagamento:            ", pagamento)
        console.log("Total a pagar:                 ", 8 * desconto)
        break
    case '3':
        console.log("Seu Pedido:                     Café")
        console.log("Forma de pagamento:            ", pagamento)
        console.log("Total a pagar:                 ", 9 * desconto)
        break
    case '4':
        console.log("Seu Pedido:                     Misto Quente")
        console.log("Forma de pagamento:            ", pagamento)
        console.log("Total a pagar:                 ", 12.99 * desconto)
        break
    case '5':
        console.log("Seu Pedido:                     Bauru")
        console.log("Forma de pagamento:            ", pagamento)
        console.log("Total a pagar:                 ", 12.99 * desconto)
        break
    case '6':
        console.log("Saindo...")
    default:
        console.log("Resposta Invalida")
    }        