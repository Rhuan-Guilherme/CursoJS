function clicar(){
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 12//data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas! `
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = 'green'
    } else if (hora >=12 && hora < 18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = 'yellow'
    } else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = 'blue'
    }
}