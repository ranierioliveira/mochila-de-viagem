const form = document.querySelector('form#novoItem');
const lista = document.querySelector('.lista');
const itens  = JSON.parse(localStorage.getItem('itens')) || [];
//JSON.parse transforma o que foi pego em array


itens.forEach((elemento) => {
    console.log(elemento.nome, elemento.quantidade);
})

form.addEventListener('submit', (evento) => {
    evento.preventDefault(); //bloqueia o evento padrão ;

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    criaElemento(nome.value, quantidade.value);

    nome.value = '';
    quantidade.value = '';
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

    itens.push(itemAtual);

    localStorage.setItem('itens', JSON.stringify(itens));
}

