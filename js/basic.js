console.log('Olá, JavaScript!');

var userName = 'Fernando Papito'

document.getElementById('user-name').innerHTML = userName

// ** Variáveis **

var nome = 'Meste Yoda'
var idade = 100
var jedi = true

// console.log(typeof nome, idade, jedi)



// ** Operadores matemáticos **

// + para somar
// - para subtrair
// * para multiplicar
// / para dividir

// var n1 = 5
// var n2 = '5'

// console.log(typeof n2)

// var total = n1 + parseInt(n2)

// console.log(total)



// ** Operadores de comparação **

// var v1 = 5
// var v2 = 5

// var resultado = v1 === v2
// console.log(resultado)


// Igual (==)
// Retorna verdadeiro se os valores comparados forem iguais.

// 1=='1' //true

// Não igual (!=)
// Retorna verdadeiro se os valores comparados não forem iguais. Esse operador também pode ser chamado de diferente de.

// 4!=1 //true

// Igual estrito (===)
// Esse operador é mais severo, só retorna verdadeiro se o valor e o tipo comparados forem iguais.

// 3==='3' //false
// 3===3 //true

// Não igual estrito (!==)
// Não se engane, esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes

// 3!=='3' //true
// 3!==3 //false
// 3!==4 //true

// Maior que (>)
// Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro

// 1>2 //false
// 5>3 //true
// 4>'1' //true

// Maior ou igual que (>=)
// Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro

// 1>=2 //false
// 5>=3 //true
// 4>='1' //true
// 2>=2 // true

// Menor que (<)
// Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro

// 1<2 //true
// 5<3 //false
// 4<'1' //false    

// Menor ou igual que (<=)
// Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro

// 1<=2 //true
// 5<=3 //false
// 4<='1' //false
// 2<=2 // true



// ** Funções **

// function soma(n1, n2) {
//     console.log(n1 + n2)
// }

// soma(5, 100)


// function boasVindas(nome) {
//     alert(`${nome}, seja bem vindo`)
// }

// boasVindas('Fernando')

// function soma(n1, n2) {
//     return n1 + n2 //devolve um resultado que precisará ser armazenado em algum lugar para ser exibido
// }

// var resultado = soma(5,5) //Criado variável resultado para armazenar o resultado da função soma

// console.log(resultado)



// ** Controle de fluxos **

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletrônicos
// Para poder comprar em lugares que não aceitam cartão de débito ou crédito

// Cenário 1: Saque com sucesso
// Dado que meu saque é de R$ 1000 reais
// Quando faço um saque de R$ 500 reais
// Então o valor do saque deve ser deduzido do meu saldo

// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de R$ 1000 reais
// Quando faço um saque de R$ 1001 reais
// Então não deve deduzir do saldo 
// E deve mostrar uma mensagem de alerta informando que ao valor é superior ao saldo

// Cenário 3: Saque com valor máximo
// Dado que meu saldo é de R$ 1000 reais
// E o valor máximo por operação é de R$ 700 reais
// Quando faço um saque no valor de R$ 701 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação

// var saldo = 1000

// function saque(valor) {
//     if(valor > saldo){
//         console.log('Valor do saque superior ao saldo')
//     } else if(valor > 700) {
//         console.log('Valor do saque é superior ao máximo permitido por operação');
//     } else {
//         saldo = saldo - valor
//     }
// }

// saque(200)
// console.log(saldo)



// ** Arrays **
// Array começa em 0

// var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

// console.log(gaveteiro[2]);

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

// personagens.push('C3pO') //Adiciona um novo item dentro do array
// personagens.push('R2D2')

// console.log(personagens);

// personagens.pop()//Remove o último item do array

// console.log(personagens);

// personagens = personagens.filter(function(personagem){ //Filtra os personagens e remove o array o que tem o nome de 'Darth Vader'
//     return personagem !== 'Darth Vader'
// })

// console.log(personagens);

// personagens = personagens.filter(function(personagem){ //Filtra os personagens e retorna somente o que tem o nome 'Mestre Yoda'
//     return personagem === 'Mestre Yoda'
// })

// console.log(personagens);




// ** Controles de repetição (Loops) **


// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'R2D2']

// personagens.forEach(function(personagem) {
//     console.log(personagem);
// })

// for (var indice in personagens) {
//     console.log(personagens[indice]);
// }

// Inicialização -> condição -> incremento
// for(var i = 0; i <= 10; i++){ //Será executado até a condição retornar false
//     console.log(i);
// }




// ** Objetos **

// var yoda = {}

// yoda.nome = 'Mestre Yoda'
// yoda.idade = 100
// yoda.jedi = true
// yoda.outro_campo = 'Algouma coisa'

// console.log(yoda);


// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function() {
//         console.log(`A idade do ${nome} é ${idade}.`)
//     }
// }

// console.log(yoda);
// yoda.mostraIdade()



// ** Constantes **

// const nome = 'Darth Vader'
// console.log(nome);

// nome = 'Mestre Yoda' //Uncaught SyntaxError: Identifier 'nome' has already been declared
// console.log(nome);