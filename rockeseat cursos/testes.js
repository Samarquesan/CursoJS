/* ### Trasformar notas escolares
    Crie um algoritmo que transforme as notas do sistema numérico para para sistema de notas tipo A B C

    * de 90 para cima   -     A
    * de 80 - 90        -     B
    * de 70 - 79        -     C
    * de 60 - 69        -     D
    * menor 60          -     F

*/


/*let notaN = 95
let notaL = ""
if(notaN > 90) {
    console.log(notaL = "A")
} else if(notaN >= 80 && notaN <= 90) {
    console.log(notaL = "B")
} else if(notaN >= 70 && notaN <= 79) {
    console.log(notaL = "C")
} else if(notaN >= 60 && notaN <= 69) {
    console.log(notaL = "D")
} else if (notaN < 60) {
    console.log(notaL = "F")
}*/

/*let notaN = 75
let notaL = ""
switch(true) {
    case (notaN >= 90):
        notaL = "A"
        console.log(notaL)
        break;
    case (notaN >= 80 && notaN <= 90):
        notaL = "B"
        console.log(notaL)
        break;
    case (notaN >= 70 && notaN <= 79):
        notaL = "C"
        console.log(notaL)
        break;
    case (notaN >= 60 && notaN <= 69):
        console.log
        console.log(notaL)
        break;
    case (notaN < 60):
        notaL = "F"
        console.log(notaL)
        break;
    default:
        console.log("[ERRO] Não há registro de nota!")
        break
}*/

/* E##Sistema de gastos familiares

Crie um objeto que possuírá duas propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora crie uma função que irá calcular o total de receitas e despesas e iá mostrar uma mensagem se a família está ou não com saldo negativo, sehido do valor do saldo.
*/



/*let MarquesFam = {
    receitas: [1400.15, 2000.60, 400.25],
    despesas: [250, 150, 210, 1300.75, 700]
}

function soma(array) {
    let total = 0;

    for (let value of array) {
        total += value
    }
    return total
}

function CalcBalanço() {
    const CalcReceitas = soma(MarquesFam.receitas)
    const CalcDividendos = soma(MarquesFam.despesas)


    const total = CalcReceitas - CalcDividendos

    const Regular = total >= 0
    const Inadinplete = total <= 0

    let Status= "Inadimplente"
    if (Regular){
        Status = "Positivo"
    }
    console.log(`Seu saldo se encontra ${Status}: R$${total}. `)
}

CalcBalanço()*/

/*let MarquesFam = {
    receitas: [3350.25, 470.99, 127.30],
    despesas: [150.50, 1660.33, 715.65]
}

let totalReceitas = SomarArray(MarquesFam.receitas)
let totalDespesas = SomarArray(MarquesFam.despesas)

var resultado = totalReceitas - totalDespesas;


function SomarArray(array) {
    let total = 0;

    for(let indice = 0; indice < array.length; indice++){
        total += array[indice];
    }

    return total;
}

if (resultado >= 0){
    console.log(`Seu saldo está [Positivo]. e está na quantia de: ${resultado}.`)
} else if(resultado <= 0){
    console.log(`Seu saldo está [Inadimplente], e está na quantia de: ${resultado}.`)
}*/

// Object
/*const BestCouple = {
    Thaiz: "Fofurinha"
    Samuel: "Manteguinha"
    EpicPhrasal: "Te amo criaturinha!!!"
}*/

//Class
//let MelhorCasal.Thaizera. Samueka.FraseTop = "Te amo demais!"

/*let meuCasal = class MeuCasal {
    constructor(Lua, Sol) {
       this.Lua = "Leoa";
       this.Sol = "MorningStar";
    }
}
console.log(meuCasal)*/


//convertendo Celsius em Fahrenheit

/*let grau = "158°F"
let grauConvertido = ConverterGraus(grau)

console.log(grau)
console.log(grauConvertido)

function ConverterGraus(strGrau)
{
    let numero;
    let tipo;

    tipo = strGrau.slice(-2)
    numero = strGrau.replace(tipo, "")

    numero = Number(numero)
    console.log(numero)

    switch(tipo)
    {
        case "°C": return CelsiusParaFahrenheit(numero) +"°F";
        break;
        case "°F": return FahrenheitParaCelsius(numero) + "°C";
        break;
        default: return "ERRO! Valor inválido!"
    }
}

function CelciusParaFahrenheit(celsius)
{
    return (celsius * (9/5)) + 32
}

function FahrenheitParaCelsius(fahrenheit)
{
    return (fahrenheit - 32) * (5/9)
}*/

/*
    C = (F-32) * 5/9
    F = C * 9/5 + 32
*/

// transformDegree("50F")
/*function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('°C')
    const fahrenheitExists = degree.toUpperCase().includes('°F')

    //fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado.')
    }

    //fluxo ideal F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("°F",""));
    let formula = fahrenheit => (fahrenheit -32) * 5/9
    let degreeSign = '°C'


    //fluxo alternativo C -> F
    if(celsiusExists) {
         updatedDegree = Number(degree.toUpperCase().replace("°C",""));
         formula = (celsius) => celsius * 9/5 + 32
         degreeSign = '°F'
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('10°C'))
    console.log(transformDegree('50°F'))
    transformDegree('50°Z')

} catch (error) {
    console.log(error.message)
}*/




 
/*
    Buscando e contando dados em Arrays
    Baseado no Array de Livros por categoria abaixo, faça os seguintes desafios
    * Contar o número de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Ansieadade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(`Total de categorias: ${totalCategories}`)
for(let category of booksByCategory) {
        console.log('Total de livros da categoria: ', category.category )
        console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory){ 
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory){ 
        for(let book of category.books) {
            if(book.author === author){
                books.push(book.title)
            }
    }
  }

  console.log(`Livros do autor ${author}:  ${books.join(", ")}`)
}

booksOfAuthor('George S. Clason')