const howWorksLink = document.getElementById('how-works-link');
const contactLink = document.getElementById('contact-link');
const howWorksSection2 = document.querySelector('.stepsSection');
const contactLink2 = document.querySelector('.footerLinks');
const aboutUsLink = document.getElementById('about-us-link');
const aboutUsSection = document.querySelector('.strategyContent');

contactLink.addEventListener('click', () => {
  contactLink2.scrollIntoView({ behavior: 'smooth' });
  const headerEl = document.querySelector('.header');
  headerEl.classList.remove('navOpen');
});

/*howWorksLink.addEventListener('click', () => {
  howWorksSection2.scrollIntoView({ behavior: 'smooth' });
  const headerEl = document.querySelector('.header');
  headerEl.classList.remove('navOpen');
});*/

/*aboutUsLink.addEventListener('click', () => {
  aboutUsSection.scrollIntoView({ behavior: 'smooth' });
  const headerEl = document.querySelector('.header');
  headerEl.classList.remove('navOpen');
});*/

function scrollToFooter() {
  const footerElement = document.querySelector('.footer');

  if (footerElement) {
    footerElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }
}

document.querySelectorAll('button').forEach(button => {
  if (button.textContent.trim() === "Mám zájem") {
    button.addEventListener('click', scrollToFooter);
  }
});