/* function statement declaração 
function createPhrases () {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é a mãe do aprendizado')
}
// chamar a função 
createPhrases()
console.log('Fim do programa')*/
//function expression/ function anonymous
//parâmetros

/*const sum = function(number1,number2) { 
    let total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25

//console.log(`O número 1 é ${number1}.`)
//console.log(`O número 2 é ${number2}.`)
console.log(`A soma é ${sum(number1, number2)}.`)
console.log(total)*/

//Função é um liquidificador
/*function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + fruta2 
}

const copo = fazerSuco('banana ','maçã')

console.log(copo)*/

/*let subject = 'Create video'
function createThink(subject) {
    subject = 'study'
    return subject
}
console.log(subject)
console.log(createThink(subject))
console.log (subject)*/

//function hoting
/*sayMyName();

function sayMyName() {
    console.log('Ore wo nawa Samuel des.')
}*/







/*var sayMyName = function()
{
    console.log("Samuel");

    return "oi";
}*/


//arrow function
/*const sayMyName = (name) => {
    console.log(name)
}
sayMyName('Samuel')*/

//callback function

/*function sayMyName(name) {
    console.log('Antes de executara função callback.')
    name()

    console.log('Depois de executar a callback.')
}

sayMyName(
    //arrow finction inside scope
    () => {
        console.log('Estou em uma callback.')
    }
)*/

/* function construtor
* expressão new
* criar um novo objeto
* this key
*/

/*function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando..."
    }
}

const samuel = new Person("Samuel") 
const thais = new Person("Thais")
console.log(samuel.walk())
console.log(thais.walk())*/

/*Prototype
    * prototype-baaed language
    * prototype chain
    * _proto_console.log(samuel)
    * 
*/


/*
    Tyoe conversion (typecasting vs type coersion)
    * alterar de um tipo de dado para outro

console.log(Number('9') + 5)
*/

/*let string = "1212"
console.log (Number(string))
console.log(typeof(string))
let number = 1111
console.log(String(number))
console.log(typeof(number))
let thais = "Thais"
console.log(typeof(thais))*/

/*contando caracteres e digitos
let word  = "Paralelepipedo"

console.log(word.length)

let number = 1234
console.log(String(number).length)*/

//Manipulando Strings e Números
// Transformar um número quebrado com 2 casas decimaais e trocar ponto por vírgula
//let number = 433.333432 
//console.log(number.toFixed(2).replace(".", ","))

//Manipulando strings e Números 
// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também.
 /*let word = "Programar é muito legal!"
 console.log(word.toLowerCase().toUpperCase())*/

 //Manipulando Strings e Arrays
 // Separe um texto  que contem espaços, em um novo array onde cada texto  é um a posição do array. Depois disso , transforme o array  em um texto e onde eram espaços coloque _
 /*let phrase = "Eu quero viver um amor!"
 let myArray = phrase.split(" ")
 let phareWithUnderscre = myArray.join("_")
 console.log(phareWithUnderscre)*/

 //Manipulando Strings 
 //Verificar se o texto contém a palavra Amor
 /*let phrase = "Eu quero viver o Amor!"
 console.log(phrase.includes("Amor")) //ele vai diferenciar Maiusculo de minusculo
*/

//Manipulando Arrays
//Criar Array com constructor
/*let myArray = new Array('a', 'b', 'c')
console.log(myArray)*/

//Manipulando Arrays
//Contar elementos de um Array
/*console.log(['a', {type: "array"}, function(){return "Alo!"}][2]())*/

//Manipulando Arrays 
//Transformar uma cadeia de caracteres em elementos de um array
/*let word = "manipulação"
console.log(Array.from(word))*/

//Manipulação de Arrays 
//let techs = ['html', 'css', 'js']
//Adicionar um item no fim
//console.log(techs.push('nodejs'))
//Adicionar no começo
//techs.unshift('sql')
//Remover do fim 
//techs.pop()
//Remover do começo
//techs.shift()
//Pegar somente alguns elementos do array
//console.log(techs.slice(1, 3))
//Remover 1 ou mais itens em qualquer posição do Array
//techs.splice(1, 1)
//Encontrar a posição de um elemento no Array
/*let index = techs.indexOf('css')
techs.splice(index, 1)
console.log(techs)*/

/* Expressões e Operadores

- Expressions
- Operartiors
    Binary
    Unary
    Ternary
*/

/*let number = 1;// If you dont use ";" the function  will get a TypeError

(function() {
    console.log("Alo!")
})()//FNÇÃO AUTO EXECUTÁVEL*/

/*let number = 1;
console.log(number + 1) //Binary operator*/

/*let number = 1
console.log(++number) //Unary operator*/

/*console.log(false ? 'Hello!' : "Nothing...") //Ternary operator*/


/* 
    new
    * left-hand-side expression
    * criar um novo objeto
*/
/*let name = new String('Samuel')//new for nu object
name.surName = "Marques"
let age = new Number(30)
let date = new Date(' 2021-05-20 ')
console.log(name, age, date.proto)*/

/* Operadores unários
    typeof
    delete


const person = {
    name: 'Samuel',
    age: 27,
}
console.log(person)
delete person.age
console.log(person)*/

 //OPeradpres aritiméticos
    //Nultiplicação *;
   /* console.log(3 * 5)
    //Divisão /;
    console.log(12 / 2)
    //Soma +;
    console.log(34 + 67)
    //Subtração -;
    console.log(34 - 23)
    //Resto da divisão %;
    let reminder
    reminder = 11 % 3
    console.log(reminder)
    //Incremento ++;
    let increment = 0
    increment++
    console.log(increment)
    //Decremento --;
    let decrement = 0
    console.log(--decrement)
    //Exponencial**;
    console.log(3 ** 2)*/

    //grouping operator ()
    /*let total = (2 + 3) * 5
    console.log(total)*/

    // Operadores de comparação
    // Irá comparar valores e retornar um boolean como resposta à comparação
    //let one = 1
    //let two = 2

    // == igaual a
    //console.log(two == 1)
    //console.log(one == "1")
    //
    //!=  diferente de 
    //console.log(one != two)
    //console.log(one != 1)
    //console.log(one != "1")

    // === Estritamente igual a 
    //console.log(one === "1")
    //console.log(one === 1)

    // !== estritamente diferente de 
    //console.log(two !== "2")
    //console.log(two !== 2)


    //let one = 1
    //let two = 2
    // > Maior que
    //console.log(one > two) 

    // >= Maior igaul a
     //console.log(one >= 1)
     //console.log(two >= 1)

    // < Menor que 
     //console.log(one < two)

    // <= Menor igual a
     //console.log(one<= two)
     //console.log(one <= 1)
     //console.log(one <= 0)

     // Operadores de atribuição (Assignment)
     /*let x 

     

     //assignment
     x = 1

     // addition assignment
      x += 2

     // subtraction assignment
      x -= 1

     // multiplication assignment
      x *= 2

     // division assigment
      x /= 2

      //remainder, exponetiation
      //x %= 2
      x **= 2
     console.log(x) */

     // Operadores lógicos (logical operators)

     // - 2 valores booleanos, quando verificados,
     // resultará em verdadeiro ou falso

     //let pao = true
     //let queijo = false

     // AND &&
        //console.log(pao && queijo)

     // OR ||
        //console.log(pao || queijo)
     // NOT !
        //console.log(!pao)

//Operador ternário
//let pao = true
//let queijo= false

/*const niceBreakfast = pao || queijo ? "Café top!" : "Café bosta!"

console.log(niceBreakfast)*/

//Maior de 18
/*let age = 23
const canDrive = age >= 18 ? "Can drive!" : "Can´t drive!"
console.log(canDrive)*/

//Operadores de Strings

// compaarison (comparação) 
//console.log('a' == 'a')

//Concatenation
//Retorna a união de duas Strings
/*let alpha = 'Alpha'
alpha += 'bet'
console.log(alpha)*/

/*
Type conversion(typecasting) vs Type coersion
 */
//console.log(Number('9') + 5)

/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/
//console.log(0 ? 'verdadeiro' : 'falso') //type coersion converte valor não boolean para false

/*
    TRUTHY
    Quando um valor é consderado true em contextos onde um boolean é obrigatório(condicionais e loops)
    true
    {}
    []
    3.23
    "0"
    Infinity
    -Infinity
*/
//console.log({} ? 'verdadeiro' : 'falso')

/* Operator precedence
* Grouping                           ( )
* Negação e incremento               ! ++ --
* Multiplicação e divisão            * /
* Adiação e subtração                + -
* Relacional                         < <= > >=c
* Igualdade                          == != === !==
* AND                                &&
* OR                                 ||
* Condicional                        ?:
* Assignment(atribuição)             = += -= *=
*/
//true==1 false==0
//console.log(3 > 2 && 2 > 1)

// Control flow
//se estiver sujo
//console.log('lavar o copo')

//console.log('servir o café')
// If... Else

/*let temperature = 37.5
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature <=37
if(highTemperature){
    console.log("Febre alta.")
} if(mediumTemperature) {
    console.log("Febre moderada")
} else {
    console.log("Saudável")
}
*/
//Switch
/*let comoFoiOdia = 'd'

switch (comoFoiOdia){
    case 'a':
        console.log("Acordo e estudo!")
        break;
    case 'b':
        console.log("Acordo putasso e não estudo!")
        break;
    case 'c':
        console.log(" Acordo puto da cara e estudo mesmo assim!")
        break;
    default:
        console.log("Nem acordo!") 
        break
}*/

/*function calculate(number1,operator, number2){

    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            console.log('+')
            break;
        case '-':
            result = number1 - number2
            console.log('-')
            break;
            case '*':
            result = number1 * number2
            console.log('*')
            break;
            case '/':
            result = number1 / number2
            console.log('/')
            break
        default:
            console.log('Não implementado')
            break
    }
    return result
}
console.log(calculate(4, '**', 8))*/

//throw
/*function sayMyName(name = ''){
    if (name === '') {
        throw new Error('Nome é obrigatório!')
    }
    
}*/



//try... catch
/*try {
    sayMyName()
} catch(e) {
    console.log(e)
}
console.log("Após o try/catch")*/

// Estrutura de repetição
//for
// break - para a execução do loop 
// continue - pula a execução don momento
/*for(let i = 10; i > 0; i--) {
    if(i === 5) {
        continue;
    }

     console.log(i)
}*/

//Estrura de repetição 
//while
//While é normalmente utilizado qnd na estrurura de repetição não sabemos o momento da parada.
/*let i = 0
while(i <= 10) {
    console.log(i)
    i++;
}*/

//for...of
// char for get a character of name
/*let name= 'Samuel'
let names = ['Cassio', 'Renan', 'Charles']

for(let name of names){
    console.log(name)
}*/

//for...in

/*let person = {
    name: 'Russel',
    age: 32,
    weight: 94.5
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}*/

/*let solidao = "Me sinto só!"
if(solidao == "Me sinto só!") {
    console.log("Estou contigo amigo! Você não está sozinho!")
} else {
    console.log("Fico feliz por saber quem tem amigos que te fazem feliz!")
}*/
