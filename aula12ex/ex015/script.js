function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10) {
                // Criança
                img.setAttribute('src', 'fotocriançahomem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotojovemhomem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'fotoadultohomem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'fotoidosohomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10) {
                // Criança
                img.setAttribute('src', 'fotocriançamulher.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotojovemmulher.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'fotoadultomulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'fotoidosomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}