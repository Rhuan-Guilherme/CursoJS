function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[EROO] Verifique os dados e tente novamente!!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //kid
                img.setAttribute('src', 'kidh.png')
            } else if (idade < 20){
                //jjovem
                img.setAttribute('src', 'jovemh.png')
            } else if (idade < 50){
                //normal
                img.setAttribute('src', 'homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'senhor.png')
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //kid
                img.setAttribute('src', 'kidm.png')
            } else if (idade < 20){
                //jovem
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 50){
                //normal
                img.setAttribute('src', 'mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'senhora.png')
            }
        }
        res.innerHTML = `Indentificamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
        res.style.textAlihg = 'center'
        
    }

}