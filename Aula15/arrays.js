

/*mum.push(valor da let) para atribuir valor no ultimo index 
 num.length para saber o comprimento da arry
num.sort() altera os elementos para ordem crescente
*/

/*let num = [5,8,2,9,3]
num[3] = 6
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O segundo valor é ${num[1]}`)

for(let pos = 0; pos<= valores.length ; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)
}

let valores = [8,1,7,4,2,9]
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)
}

*/

let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos== -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}






