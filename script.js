document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

const menuButton = document.querySelector('.home-menu-button');
const homeNav = document.querySelector('.home-nav');
if (menuButton && homeNav) {
  menuButton.addEventListener('click', () => {
    const open = homeNav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}
