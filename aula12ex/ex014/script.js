function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    if (minutos < 10) {
        msg.innerHTML = `Agora são ${hora}:0${minutos}`
    } else {
        msg.innerHTML = `<p>Agora são ${hora}:${minutos}</p>`
    }
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        msg.innerHTML += `<strong>Bom Dia!</strong>`
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        msg.innerHTML += `<strong>Boa Tarde!</strong>`
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    }else {
        // BOA NOITE!
        msg.innerHTML += `<strong>Boa Noite!</strong>`
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}
