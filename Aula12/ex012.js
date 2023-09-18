var now = new Date()
var hora = now.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if(hora < 12){
    console.log('Tenha um ótimo dia!')
} else if(hora <= 18){
    console.log('Tenha uma ótima tarde!')
}else {
    console.log('Tenha uma ótima noite!')
}