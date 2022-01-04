function verificar() {
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById("res")
    if (passo.value.length == 0 || inicio.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = `Impossível contar!`
        //window.alert("Campo Vazio")
    } else {
        res.innerHTML = `Contando: <br>`
        if(passo.value == 0){
            window.alert('Passo invalido! Considerando PASSO 1')
            passo.value = 1
        }
        if (Number(inicio.value) < Number(fim.value)) {
            for ( var i = Number(inicio.value) ; i <= Number(fim.value); i+=Number(passo.value)) {
                res.innerHTML += ` ${i} \u{1F449} `
                
            }
        } else {
            for ( var i = Number(inicio.value) ; i > Number(fim.value); i-=Number(passo.value)) {
                res.innerHTML += ` ${i} \u{1F449} `
                
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}