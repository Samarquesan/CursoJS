function contar(){
    let inicio = document.getElementById('NumInicio')
    let final = document.getElementById('NumFim')
    let passo = document.getElementById('idstep')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else{
        res.innerHTML = 'Contando...<br>'
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)
        if(p <=0){
            window.alert('Passo inválido! ')
            p = 1
        }
        if(i < f){
            //Contagem crescente
            for(let c = 1; c <= f; c += p){
                res.innerHTML += ` \u{1f449}${c} `
            }
        } else{
            //Contagem regressiva
            for(c = i; c >= f; c-= p){
                res.innerHTML += ` \u{1f449}${c} `
            }
        }
        res.innerHTML+= `\u{1f3c1}`
    }
} 