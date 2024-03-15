$(document).ready(function () {
    $('form').on('submit', function(e) {
        e.preventDefault()
        const novaTarefa = $('#inserir').val()
        const novoItem = $('<li></li>')
        $(`<p>${novaTarefa}</p>`).appendTo(novoItem)
        $(`<span class="remove"><i class="fa-solid fa-trash-can-arrow-up"></i></span>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $('#inserir').val('') //clean form

        
        $('p').click(function(){
            $(this).addClass('check')
        })

        $('.remove').click(function(){
            $(this).parent().remove()
        })
    })

    // --LIGHT MODE--
    $('.toggleBtn').click(function(){
        $('body').toggleClass('lightMode')
        $('.todoArea').toggleClass('lightModeContainer')
        $('.newTodo input').toggleClass('lightModeContainer')
        $(this).toggleClass('lightModeIcon')

        if($(this).hasClass('lightModeIcon')){
            $(this).html('<i class="fa-solid fa-sun"></i>')
        } else{
            $(this).html('<i class="fa-solid fa-moon"></i>')
        }
    })
})