const form = document.querySelector('form#novoItem');
const lista = document.querySelector('.lista');

form.addEventListener('submit', (evento) => {
    evento.preventDefault(); //bloqueia o evento padrão 
    console.log(evento);
    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);
})

function criaElemento(nome, quantidade){
    const novoElemento = document.createElement('li');
    novoElemento.classList.add('item');
    novoElemento.innerHTML = `<strong>${quantidade}</strong>${nome}`;
    lista.appendChild(novoElemento);
}