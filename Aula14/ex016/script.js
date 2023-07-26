function Calcular() {
   
   let comeco = Number(document.getElementById('start').value)
   let final = Number(document.getElementById('end').value)
   let passos = Number(document.getElementById('step').value)
   let res = document.getElementById('resultado') 
   //console.log(typeof(comeco));
   let cassio = "1"
   console.log(comeco == cassio)
    if (comeco == 0 || final == 0 || passos == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
            res.innerHTML = 'Contando: '

            if (comeco < final) {
                for ( let contador = comeco; contador <= final; contador += passos ) {
                    res.innerHTML += `${contador} \u{1F449}`    
                }       
            } else {
                for (let contador = comeco; contador >= final; contador -= passos) {
                    res.innerHTML += `${contador} \u{1F449}`
                }         
            }
            res.innerHTML+= `\u{1F3C1}`
        }    
}
   