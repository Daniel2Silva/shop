export default function initModal(){

}
const abrir = document.querySelector('[data-modal="conta"]')
const fechar = document.querySelector('[data-modal="fechar"]')
const modal = document.querySelector('[data-modal="modal"]')



function ativarModal(){
    modal.classList.toggle('ativo')
};



abrir.addEventListener('click', ativarModal);
fechar.addEventListener('click', ativarModal);