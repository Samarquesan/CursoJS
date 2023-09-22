function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique novamente os dados!')
    } else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img. setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'menino.jpg')
            } else if(idade < 21){
                //Adolescente
                img.setAttribute('src', 'garoto-adolescente.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'homem.jpg') 
            } else{
                //Idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'menina.jpg')
            } else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'gorota-adolescente.jpg')
            } else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'mulher.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
};


//var idade = window.document.getElementById('')
//var sexo = window.document.getElementById('')
//
