// Exercício 1

let periodo = "dia"

if(periodo == "dia") {
    console.log ("claro")
} 
else {
    console.log("noite")
}


// Exercício 2

for (let numero=0; numero<=20; numero+=2) {
    console.log (numero)
}


// Exercício 3

function mostrarMsg(curso){
    console.log (`Eu amo o ${curso}`)
}
mostrarMsg("VnW")


// Exercício 4

function meuNome(nome) {
    console.log (`Meu nome é ${nome}`)
    }
    meuNome(`Natália`)


// Exercício 5

function identificacao(nome,idade,musica) {
    console.log (`Meu nome é ${nome}, tenho ${idade} anos e meu estilo musical preferido é ${musica}.`)
}
identificacao("Natália","30","rock")

// Exercício 6

function preferencia(filme,musica) {
    console.log (`Meu filme preferido é ${filme} e minha música preferida é ${musica}`)
}
preferencia("Harry Potter","Something Just Like This")

// Exercício 7

function triplo(numero) {
    return numero*3
}
console.log (triplo(8))

// Exercício 8

function verificacao(numero) {
    return numero === 2
}

console.log(verificacao("2"))

// Exercício 9

let alunos=["Alice", "Enzo", "Valentina", "Yuri", "Isis", "Manuela"]

console.log(alunos)

// Exercício 10

alunos.unshift("Cauã")
console.log(alunos)

// Exercício 11

alunos.pop()
console.log(alunos)

// Exercício 12

alunos.push("Pedro", "Sofia")
console.log(alunos)

// Exercício 13

alunos.shift()
console.log(alunos)

// Exercício 14

let nome = ["João",  "Maria",  "Jose",  "Pedro"]

nome.splice(2,0,"Natália")
console.log(nome)

// Exercício 15

let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort()
console.log(numbers)




