const $ = document.querySelector.bind(document);
const hamburguer = $(".hamburguer h1");
const refrigerantes = $(".refrigerantes h1");
const sucos = $(".sucos h1");
const porcoes = $(".porcoes h1");



hamburguer.addEventListener("click", addClass);
refrigerantes.addEventListener("click", addClassRefri);
sucos.addEventListener("click", addClassSucos);
porcoes.addEventListener("click", addClassPorcoes);

function addClass(event) {
    const submenu = document.querySelectorAll(".submenu-burguer");
    event = submenu.forEach((item) => {
        item.classList.toggle("ativo");
    });
}

function addClassRefri(event) {
    const submenu = document.querySelectorAll(".submenu-refri");
    event = submenu.forEach((item) => {
        item.classList.toggle("ativo");
    });
}

function addClassSucos(event) {
    const submenu = document.querySelectorAll(".submenu-sucos");
    event = submenu.forEach((item) => {
        item.classList.toggle("ativo");
    });
}

function addClassPorcoes(event) {
    const submenu = document.querySelectorAll(".submenu-porcoes");
    event = submenu.forEach((item) => {
        item.classList.toggle("ativo");
    });
}

const btnPedido = $(".btn-pedido");
const btnFecharModal = $(".fechar-modal");
const containerModal = $(".modal-container");

if (btnPedido && btnFecharModal && containerModal) {
    function toggleModal(event) {
        event.preventDefault();
        containerModal.classList.toggle("active");
    }

    function cliqueForaModal(event) {
        if (event.target === this) {
            toggleModal(event);
        }
    }
    btnPedido.addEventListener("click", toggleModal);
    btnFecharModal.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
}


const cardapioElement = document.getElementById('cardapio');
const totalElement = document.getElementById('total');
const carrinhoItemsListElement = document.getElementById('items');

const cardapio = [
    { name: 'X-salada', value: 10.00 },
    { name: 'X-bacon', value: 15.00 },
    { name: 'X-tudo', value: 25.00 },
    { name: 'Suco', value: 7.00 },
    { name: 'Refrigerante', value: 6.00 },
    { name: 'Porções', value: 30.00 },

];

const carrinho = [];

function atualizarCarrinho() {
    carrinhoItemsListElement.innerHTML = '';
    carrinho.forEach(item => {
        const itemCarrinho = document.createElement('div');
        itemCarrinho.classList.add('container-flex');
        itemCarrinho.textContent = `${item.name} - R$ ${item.value},00`;
        carrinhoItemsListElement.appendChild(itemCarrinho);
    });
    const total = carrinho.length ? carrinho.reduce((a, b) => ({ value: a.value + b.value })).value : 0;
    totalElement.textContent = `R$${total},00`;
}


function addItem(novoItem) {
    carrinho.push(novoItem);
    atualizarCarrinho();
}

function removeItem(itemParaRemover) {
    const itemNoCarrinho = carrinho.find(item => item.name === itemParaRemover.name);
    const idexOfItem = carrinho.indexOf(itemNoCarrinho);
    if (idexOfItem > -1) carrinho.splice(idexOfItem, 1);
    atualizarCarrinho();
}

cardapio.forEach(item => {
    const btnItemAdd = document.createElement('button');
    btnItemAdd.textContent = "+";
    btnItemAdd.classList.add('btnMais')
    btnItemAdd.onclick = () => addItem({...item });
    const btnItemSub = document.createElement('button');
    btnItemSub.textContent = "-";
    btnItemSub.classList.add('btnMenos')
    btnItemSub.onclick = () => removeItem({...item });
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('container-flex');
    itemContainer.textContent = item.name;
    itemContainer.appendChild(btnItemAdd);
    itemContainer.appendChild(btnItemSub);
    cardapioElement.appendChild(itemContainer);
});