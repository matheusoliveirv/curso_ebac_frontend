document.addEventListener('DOMContentLoaded', function(){
    const btn = document.querySelector('#btn')
    btn.addEventListener('click', function(evento){
        document.querySelector('.container').classList.toggle('opaco')
    })
})