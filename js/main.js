const form = document.querySelector('form#novoItem');

form.addEventListener('submit', (evento) => {
    evento.preventDefault(); //bloqueia o evento padrão 
    console.log(evento);

    console.log(evento.target.elements['nome'].value);
    console.log(evento.target.elements['quantidade'].value)
})

//6:05 primeiro video