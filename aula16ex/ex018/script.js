var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function inNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inlist(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (inNumero(num.value) && !inlist(num.value, valores)){
        alert('Tudo ok!')
    } else {
        alert('Verifique os dados e tente novamente!')
    }
}