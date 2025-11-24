const btnNavEl = document.querySelector('.btnMobileNav');
const btnNavEl2 = document.querySelector('.btnMobileNav2');
const headerEl = document.querySelector('.header');

btnNavEl2.addEventListener('click', () => {
  headerEl.classList.add('navOpen');
});

btnNavEl.addEventListener('click', () => {
  headerEl.classList.remove('navOpen');
});
