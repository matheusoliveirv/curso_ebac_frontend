$('document').ready(() => {

    //MASK
    $('#telefone').mask('(00) 00000-0000'),{
        placeholder: '(XX) XXXXX-XXXX'
    }
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

})