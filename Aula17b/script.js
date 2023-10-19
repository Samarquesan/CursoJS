let number= document.getElementById('IdNum')
let lista = document.getElementById('flista')
let resposta = document.getElementById('IdResp')
let valores = []
function isNumber(n){
    if(Number(n) >= 1 && Number(n)<= 100 ){
        return true
    } else {
        return false
    }
}

function inLista(n , l){
    if(l.indexOf(Number(n) != -1)){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumber(number.value) && !inLista(number.value, valores)){
        valores.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `Valor ${number.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    number.value = ''
    number.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else{
        let tot = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valore[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma /tot
        res.innerHTML = ''
        res.innerHTML = `<p>Ao total temos &{tot} Números cadastrados.</p>`
        res.innerHTML = `<p>O maior valor informado foi &{maior}</p>`
        res.innerHTML = `<p>O menor valor informado foi &{menor}</p>`
        res.innerHTML = `<p>Somando todos os valores temos &{soma}</p>`
        res.innerHTML = `<p>A média dos valores é &{media}</p>`
       
    }
}

function Clean{
    res.innerHTML = ''
    lista.innerHTML = ''
}