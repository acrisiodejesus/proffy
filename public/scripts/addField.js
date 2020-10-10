// Procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//Quando clica

//Executar uma acção
function cloneField() {
    //Duplicar os campos. Que Campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Limpar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    
    //para cada campo, limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa
        field.value = ""
    })
    
    // Colocar na pagina. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)


}