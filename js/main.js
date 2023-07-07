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

    //Confere se o elemento adicionado já existe
    const existe = itens.find(elemento => elemento.nome === nome.value);
    console.log(existe);

    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    if(existe){
        itemAtual.id = existe.id;
        atualizaElemento(itemAtual);
    } else {
        itemAtual.id = itens.length;
        criaElemento(itemAtual);
        itens.push(itemAtual);
    }

    

    localStorage.setItem('itens', JSON.stringify(itens));

    nome.value = '';
    quantidade.value = '';
});

function criaElemento(item){
    const novoElemento = document.createElement('li');
    novoElemento.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;
    novoElemento.appendChild(numeroItem);

    novoElemento.innerHTML += item.nome;

    lista.appendChild(novoElemento);
}

function atualizaElemento(item){
    document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantidade;
}