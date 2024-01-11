const form = document.querySelector('#validacao')
let a = document.querySelector('.primeiroNum')
let b = document.querySelector('.segundoNum')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const campoA = parseInt(a.value)
    const campoB = parseInt(b.value)

    const valido = `Comparação válida :) ${campoB} é maior que ${campoA}`
    const invalido = `Comparação inválida :( ${campoB} não é maior que ${campoA}`
    const mensagem = document.querySelector('.mensagem')

    campoA < campoB ? mensagem.innerHTML = valido : mensagem.innerHTML = invalido
    campoA < campoB ? mensagem.classList.add('valido') & mensagem.classList.remove('invalido') : mensagem.classList.add('invalido') & mensagem.classList.remove('valido')

    a.value = ''
    b.value = ''
    
})
