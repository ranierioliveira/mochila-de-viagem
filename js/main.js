const form = document.querySelector('form#novoItem');
const lista = document.querySelector('.lista');
const itens  = JSON.parse(localStorage.getItem('itens')) || [];
//JSON.parse transforma o que foi pego em array


itens.forEach((elemento) => {
    criaElemento(elemento);
})

form.addEventListener('submit', (evento) => {
    evento.preventDefault(); //bloqueia o evento padrão ;

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    criaElemento(itemAtual);

    itens.push(itemAtual);

    localStorage.setItem('itens', JSON.stringify(itens));

    nome.value = '';
    quantidade.value = '';
});

function criaElemento(item){
    const novoElemento = document.createElement('li');
    novoElemento.classList.add('item');
    novoElemento.innerHTML = `<strong>${item['quantidade']}</strong>${item['nome']}`;
    lista.appendChild(novoElemento);
}
