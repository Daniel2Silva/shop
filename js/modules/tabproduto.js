export default function tabProduto() {
  const imgPequena = document.querySelectorAll(
    "[data-tab-produto='imagem-pequena'] img"
  );
  const imgGrande = document.querySelectorAll(
    "[data-tab-produto='imagem-grande'] img"
  );

  imgGrande[0].classList.add("ativo");
  function ativarTab(index) {
    imgGrande.forEach((imagem) => {
      imagem.classList.remove("ativo");
    });
    imgGrande[index].classList.add("ativo");
  }

  imgPequena.forEach((item, index) => {
    item.addEventListener("click", () => {
      ativarTab(index);
    });
  });
}
