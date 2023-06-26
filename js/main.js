const form = document.querySelector('form#novoItem');
const lista = document.querySelector('.lista');

form.addEventListener('submit', (evento) => {
    evento.preventDefault(); //bloqueia o evento padrão ;

    const nome = evento.target.elements['nome'].value;
    const quantidade = evento.target.elements['quantidade'].value;

    criaElemento(nome, quantidade);

    nome = '';
    quantidade = '';
});

function criaElemento(nome, quantidade){
    const novoElemento = document.createElement('li');
    novoElemento.classList.add('item');
    novoElemento.innerHTML = `<strong>${quantidade}</strong>${nome}`;
    lista.appendChild(novoElemento);

    const itemAtual = {
        'nome': nome,
        'quantidade': quantidade
    }

    localStorage.setItem('item', itemAtual);

}