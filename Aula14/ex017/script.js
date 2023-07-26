function tabuada(){

    let num= document.getElementById("txtn")
   let tab= document.getElementById("seltab")
    //let resp= document.getElementById("res")
  
    if(num.value.length == 0) {
        window.alert('[ERRO] Insira um número.')
    } else {
        let n = Number(num.value)
        let c = 0
        tab.innerHTML = ""
        for (c ; c<= 10; c++ ){
            let item = document.createElement('option')
                    item.text = `${n} x ${c} = ${n * c}`
                    item.value = `tab${c}`
                    tab.appendChild(item)
        }
    }
    
    /*resp.innerHTML= ""    
        for(firsT=0;firsT <= 10; firsT++) {
            
            resp.innerHTML+= `${numb} x ${firsT} = ${numb*firsT}<br/>`
            
        }*/
    
}

