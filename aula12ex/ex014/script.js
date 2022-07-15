function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //BOM dia
        img.src = 'manha.png'
        document.body.style.background = '#4E7A1C'
    } else if (hora >= 12 && hora < 18){
        //BOA tarde
        img.src = 'tarde.png'
        document.body.style.background = '#AA3F07'
    }else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#233C75'
        
    }
}
