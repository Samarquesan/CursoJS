let amigo = {
    nome: 'Renan Felipe da Silva Mendonça',
    idade: 31,
    genero: 'Masculino',
    peso: 87.3,
    altura: 1.83,
    engordar(p=0){
        this.peso += p
    }
}
let RenanComeuGordices = true
//let RenanComeuGordices = false
if(RenanComeuGordices == true){
    amigo.engordar(2)
    console.log('Cuidado com seu peso!')
} else{
    console.log('Parabéns por manter o foco!')
}
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)