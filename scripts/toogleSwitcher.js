let btnWantSell = document.querySelector('.btnSwitchBeige');
let btnWantNew = document.querySelector('.btnSwitchRed');

let sectionSell = document.getElementById('want-sell');
let sectionNew = document.getElementById('want-new');

let colorStepper1 = document.querySelector('.colorStepper1');
let colorStepper2 = document.querySelector('.colorStepper2');
let colorStepper3 = document.querySelector('.colorStepper3');

let headingStep1 = document.getElementById('headingStep1');
let headingStep2 = document.getElementById('headingStep2');
let headingStep3 = document.getElementById('headingStep3');

let textStep1 = document.getElementById('textStep1');
let textStep2 = document.getElementById('textStep2');
let textStep3 = document.getElementById('textStep3');

const howWorksSection = document.querySelector('.stepsSection');

if (btnWantNew && btnWantSell) {
  btnWantNew.addEventListener('click', () => {
    sectionSell.style.display = 'none';
    sectionNew.style.display = 'block';
    btnWantNew.style.backgroundColor = '#c64227';
    btnWantNew.style.color = '#fff';
    btnWantSell.style.backgroundColor = '#fff';
    btnWantSell.style.color = '#d8b08a';
    colorStepper1.classList.remove('numberBeige');
    colorStepper1.classList.add('numberRed');
    colorStepper2.classList.remove('numberRed');
    colorStepper2.classList.add('numberRed');
    colorStepper3.classList.remove('numberBeige');
    colorStepper3.classList.add('numberRed');
    headingStep1.textContent = 'Získaní stipendia a ordinace';
    headingStep2.textContent = 'Čas na to, čím jste';
    headingStep3.textContent = 'Silné zázemí';
    textStep1.textContent =
        'Získaní stipendia a následně vlastní ordinace bez Vašich investic či know-how';
    textStep2.textContent =
        'Budete mít prostor na Vaše pacienty a jejich léčbu. Administrativu, programy, finance a provozní záležitosti vyřešíme za Vás';
    textStep3.textContent =
        'Budete mít o koho se opřít - a postupně růst dle Vašich přání';
  });

  btnWantSell.addEventListener('click', () => {
    sectionSell.style.display = 'block';
    sectionNew.style.display = 'none';
    btnWantNew.style.color = '#c64227';
    btnWantNew.style.backgroundColor = '#fff';
    btnWantSell.style.color = '#fff';
    btnWantSell.style.backgroundColor = '#d8b08a';
    colorStepper1.classList.add('numberBeige');
    colorStepper1.classList.remove('numberRed');
    colorStepper2.classList.add('numberRed');
    colorStepper2.classList.remove('numberRed');
    colorStepper3.classList.add('numberBeige');
    colorStepper3.classList.remove('numberRed');
    headingStep1.textContent = 'Rychlý prodej';
    headingStep2.textContent = 'Načasujeme předání';
    headingStep3.textContent = 'Anebo více dovolené';
    textStep1.textContent =
        'Ordinaci od Vás vykoupíme a okamžitě ulevíme od administrativy';
    textStep2.textContent =
        'Předat ordinaci můžete během roku anebo i delší doby, záleží na Vašich preferencích';
    textStep3.textContent =
        'Pokud preferujete jen více dovolené, zajistíme "létajícího doktora", který Vás zastoupí třeba každý týden v měsíci';
  });

  btnWantNew.click();
}

const onClickSell = () => {
  btnWantSell.click();
  howWorksSection.scrollIntoView({ behavior: 'smooth' });
};
const onClickNew = () => {
  btnWantNew.click();
  howWorksSection.scrollIntoView({ behavior: 'smooth' });
};
