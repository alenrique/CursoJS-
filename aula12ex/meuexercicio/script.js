function calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    if (txtv.value.length == 0) {
        window.alert('[ERRO] Campo Vazio')
    } else {
        res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`
        if (vel > 60) {
            res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade</p>`
            document.body.style.background = 'red'
            document.body.style.transition = '3s'
        } else {
            document.body.style.background = 'green'
            document.body.style.transition = '3s'
        }
        res.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`
        }
}