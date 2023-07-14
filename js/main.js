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

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual;
    } else {
        //Confere se não está vazio o array (operador ternário)
        itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1].id) + 1: 0;
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

    novoElemento.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoElemento);
}

function atualizaElemento(item){
    document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantidade;
}

function botaoDeleta(id){
    const elementoBotao = document.createElement('button');
    elementoBotao.innerText = 'X';

    elementoBotao.addEventListener('click', function() {
        deletaElemento(this.parentNode, id);
    });

    return elementoBotao;
}

function deletaElemento(botao, id){
    botao.remove();  

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1);
    console.log(itens);

    localStorage.setItem('itens', JSON.stringify(itens));
}