const initMenuHamb = () => {
  const ButtonMenuHambu = document.querySelector(".bota-menu-hambu");
  const closeMenu = document.querySelector(".close-menu");
  const menuHamburguer = document.querySelector(".menu-hamburguer");

  console.log(ButtonMenuHambu);

  function ativarMenuHamburguer() {
    menuHamburguer.classList.toggle("ativar");
    closeMenu.classList.toggle("ativar");
  }
  function desativarMenuHamburguer() {
    menuHamburguer.classList.remove("ativar");
    closeMenu.classList.remove("ativar");
  }

  closeMenu.addEventListener("click", desativarMenuHamburguer);

  ButtonMenuHambu.addEventListener("click", ativarMenuHamburguer);
};

initMenuHamb();
