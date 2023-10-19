/*function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

let res = parimpar(4)
console.log(res)*/

function parOuImpar(numero){
    let valor = numero
    if(numero %2 == 0){
        return console.log(`O número ${valor} é Par!`)
    } else{
       return console.log(`O número ${valor} é Impar!`)
    }
}

let resposta = parOuImpar(3)