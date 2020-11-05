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

const btnMais = document.querySelectorAll("li .btnMais");
btnMais.forEach((item) => {
    item.addEventListener("click", adicionar);
});

function adicionar(event) {
    console.log("Adicionou");
}

const btnMenos = document.querySelectorAll("li .btnMenos");
btnMenos.forEach((item) => {
    item.addEventListener("click", remover);
});

function remover(event) {
    console.log("Removeu");
}

const btnConfirmar = $('.btn-confirmar');
btnConfirmar.addEventListener('click', confirmou);

function confirmou() {
    alert('Pedido enviado com sucesso!!')
}