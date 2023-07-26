function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'Foto_manha.png'
        document.body.style.background = '#99a770'
    } else if (hora >= 12 && hora < 18) {
      // Boa tarde!  
      img.src = 'Foto_tarde.png'
      document.body.style.background = '#e16e17'
    }else {
        //Boa noite!
        img.src = 'Foto_noite.png'
        document.body.style.background = '#5c656f'
    }
}
