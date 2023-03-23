// const estudante = {
//     nome: "joao",
//     sobrenome: "neiva",
//     matricula: "345",
//     notas: [9,8,10]
// }
// console.log(estudante)

// estudante.modulo = "modulo1"

// console.log(estudante.nome)
// console.log(estudante.notas[1])
// console.log(estudante.modulo)

// const estudante2 = {...estudante}
// estudante2.nome = "Astrodev"
// estudante2.notas = [...estudante.notas]
// estudante2.notas.push(9)
// estudante.modulo = "modulo2"

// console.log(estudante2)

// const estudantesLabenu = []
// estudantesLabenu.push(estudante, estudante2)
// console.log(estudantesLabenu)


// 1) Crie um objeto carrinho. Este objeto vai guardar nossas compras. Inicialmente, o objeto carrinho deve guardar:
// o nome da pessoa que faz as compras
// sua forma de pagamento
// seu endereço

const carrinho = {
    nome: "carlos",
    pagamento: "cartão",
    enedreço: "Rua x, lote 10, casa 7"
}

// 2) Vamos adicionar mais uma propriedade ao nosso carrinho, o array de objetos chamado “compras”. 
// Cada objeto de compra deve possuir:
// o nome do produto
// o preço do produto
// a quantidade de unidades deste produto que serão compradas

carrinho.compras = [
    {nomeProduto: "lapis", preço: "2,00", quantidade: 7},
    {nomeProduto: "cartolina", preço: "10,00", quantidade: 10},
    {nomeProduto: "caneta", preço: "3,00", quantidade: 5}
]

// 3) Imprima a quantidade de produtos dentro do array compras que existem no carrinho
// 4) Crie uma cópia do carrinho, chamada “carrinhoPresente”, que será igual ao carrinho original, mas com o nome da pessoa a ser presenteada, e a forma de pagamento alterada para cartão presente
// 5) Imprima ambos os carrinhos no console.

console.log("quantidade de produtos do carrinho: ", carrinho.compras.length)

const carrinhoPresente = {...carrinho}
carrinhoPresente.pessoaPresenteada = "Pedro"
carrinhoPresente.pagamento = "cartão presente"

console.log(carrinho)
console.log(carrinhoPresente)