import OutSideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const btnMenuMobile = document.querySelector(
    "[data-mobile='btn-menu-mobile']"
  );
  const btnClosedMenu = document.querySelector("[data-mobile='btn-close']");
  const menuMobile = document.querySelector("[data-mobile='menu']");
  const eventos = ["click", "touchstart"];

  if (btnMenuMobile) {
    function openMenu(event) {
      menuMobile.classList.add("ativo");
      OutSideClick(menuMobile, eventos, () => {
        menuMobile.classList.remove("ativo");
      });
    }

    function closeMenu() {
      menuMobile.classList.remove("ativo");
    }

    eventos.forEach((useEvent) => {
      btnMenuMobile.addEventListener(useEvent, openMenu);
      btnClosedMenu.addEventListener(useEvent, closeMenu);
    });
  }
}
