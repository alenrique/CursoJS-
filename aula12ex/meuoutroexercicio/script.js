var header = window.document.querySelector('header#header')
var section = window.document.querySelector('section#section')
var sele = window.document.querySelector('div#sele')
function escurecer() {
    document.body.style.background = 'black'
    document.body.style.transition = '3s'
    header.style.background = 'rgb(255, 148, 166)'
    header.style.color = 'black'
    header.style.transition = '3s'
    sele.style.color = 'white'
    sele.style.transition = '3s'
    section.style.background = 'black'
    section.style.color = 'white'
    section.style.transition = '3s'
    footer.style.background = 'rgb(255, 148, 166)'
    footer.style.color = 'black'
    footer.style.transition = '3s'
    header.style.boxShadow = '3px 3px 10px rgba(255, 255, 255, 0.363)'
    section.style.boxShadow = '3px 3px 10px rgba(255, 255, 255, 0.363)'
    footer.style.boxShadow = '3px 3px 10px rgba(255, 255, 255, 0.363)'
}
function clarear() {
    document.body.style.background = 'white'
    document.body.style.transition = '3s'
    header.style.background = 'rgb(70, 142, 236)'
    header.style.color = 'white'
    header.style.transition = '3s'
    sele.style.color = 'black'
    sele.style.transition = '3s'
    section.style.background = 'white'
    section.style.color = 'black'
    section.style.transition = '3s'
    footer.style.background = 'rgb(70, 142, 236)'
    footer.style.color = 'white'
    footer.style.transition = '3s'
    header.style.boxShadow = '3px 3px 10px rgba(0, 0, 0, 0.363)'
    section.style.boxShadow = '3px 3px 10px rgba(0, 0, 0, 0.363)'
    footer.style.boxShadow = '3px 3px 10px rgba(0, 0, 0, 0.363)'
}