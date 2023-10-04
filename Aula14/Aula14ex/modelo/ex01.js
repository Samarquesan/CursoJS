
function tabuada(){
    let startNumber = document.getElementById('idnumber')
    let ressult = document.getElementById('idresp')
    let tab = document.getElementById('seltab')
    if(startNumber.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else{
        let n = Number(startNumber.value)
       tab.innerHTML = ''
       for(c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
    
}