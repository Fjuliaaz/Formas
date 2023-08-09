'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')

    function mudaCor (){
    forma1.classList.toggle('vermelho')}
    forma1.addEventListener('click' , mudaCor)
    
    function mudarForma(){
    forma2.classList.toggle('circulo')
    }forma2.addEventListener('click', mudarForma)


    function girar(){
        forma3.classList.toggle('giro')
        forma3.classList.toggle('img2')
    }forma3.addEventListener('click', girar)
    
    function trocar() {
        forma4.classList.toggle('mover')
    }forma4.addEventListener('click', trocar)

    function mudarTamanho(){
        forma5.classList.toggle('zoom')
    }forma5.addEventListener('click', mudarTamanho)

