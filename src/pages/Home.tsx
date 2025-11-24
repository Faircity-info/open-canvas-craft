import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Home = () => {
  const [activeMode, setActiveMode] = useState<"new" | "sell">("new");

  const handleNewClick = () => {
    setActiveMode("new");
    const stepsSection = document.querySelector('.stepsSection');
    if (stepsSection) {
      stepsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSellClick = () => {
    setActiveMode("sell");
    const stepsSection = document.querySelector('.stepsSection');
    if (stepsSection) {
      stepsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Update step content based on active mode
    const headingStep1 = document.getElementById('headingStep1');
    const headingStep2 = document.getElementById('headingStep2');
    const headingStep3 = document.getElementById('headingStep3');
    const textStep1 = document.getElementById('textStep1');
    const textStep2 = document.getElementById('textStep2');
    const textStep3 = document.getElementById('textStep3');
    const colorStepper1 = document.querySelector('.colorStepper1');
    const colorStepper2 = document.querySelector('.colorStepper2');
    const colorStepper3 = document.querySelector('.colorStepper3');

    if (activeMode === "new") {
      if (headingStep1) headingStep1.textContent = 'Získaní stipendia a ordinace';
      if (headingStep2) headingStep2.textContent = 'Čas na to, čím jste';
      if (headingStep3) headingStep3.textContent = 'Silné zázemí';
      if (textStep1) textStep1.textContent = 'Získaní stipendia a následně vlastní ordinace bez Vašich investic či know-how';
      if (textStep2) textStep2.textContent = 'Budete mít prostor na Vaše pacienty a jejich léčbu. Administrativu, programy, finance a provozní záležitosti vyřešíme za Vás';
      if (textStep3) textStep3.textContent = 'Budete mít o koho se opřít - a postupně růst dle Vašich přání';
      
      if (colorStepper1) {
        colorStepper1.classList.remove('numberBeige');
        colorStepper1.classList.add('numberRed');
      }
      if (colorStepper2) {
        colorStepper2.classList.remove('numberBeige');
        colorStepper2.classList.add('numberRed');
      }
      if (colorStepper3) {
        colorStepper3.classList.remove('numberBeige');
        colorStepper3.classList.add('numberRed');
      }
    } else {
      if (headingStep1) headingStep1.textContent = 'Rychlý prodej';
      if (headingStep2) headingStep2.textContent = 'Načasujeme předání';
      if (headingStep3) headingStep3.textContent = 'Anebo více dovolené';
      if (textStep1) textStep1.textContent = 'Ordinaci od Vás vykoupíme a okamžitě ulevíme od administrativy';
      if (textStep2) textStep2.textContent = 'Předat ordinaci můžete během roku anebo i delší doby, záleží na Vašich preferencích';
      if (textStep3) textStep3.textContent = 'Pokud preferujete jen více dovolené, zajistíme "létajícího doktora", který Vás zastoupí třeba každý týden v měsíci';
      
      if (colorStepper1) {
        colorStepper1.classList.add('numberBeige');
        colorStepper1.classList.remove('numberRed');
      }
      if (colorStepper2) {
        colorStepper2.classList.add('numberRed');
        colorStepper2.classList.remove('numberBeige');
      }
      if (colorStepper3) {
        colorStepper3.classList.add('numberBeige');
        colorStepper3.classList.remove('numberRed');
      }
    }
  }, [activeMode]);

  const benefits = [
    {
      number: "1",
      title: "Vlastní ordinace",
      description: "Ordinace nese vždy Vaše jméno. My zajistíme její provoz a Vy budete mít čas na své pacienty."
    },
    {
      number: "2",
      title: "Hladké předání ordinace",
      description: "Odkoupíme ordinaci a připravíme ji s Vámi na předání novému doktorovi. A to během pár měsíců nebo let, dle Vaší preference."
    },
    {
      number: "3",
      title: "Dostupná péče",
      description: "Společně vrátíme dostupnou péči do regionů. Moderně a jednoduše."
    },
    {
      number: "4",
      title: "Podpora ZP",
      description: "Koncept podporují zdravotní pojišťovny."
    },
    {
      number: "5",
      title: "Všechny kraje ČR",
      description: "Zřizujeme a pomáháme spravovat ordinace ve všech krajích České republiky."
    },
    {
      number: "6",
      title: "Ekonomická podpora",
      description: "Postaráme se o celý ekonomický chod ordinace."
    }
  ];

  const processNew = [
    {
      icon: "/img/handshake-icon.svg",
      iconClass: "icon1",
      lineClass: "lineProcess1 lineLenght1",
      sticker: "Měsíc 1",
      stickerClass: "sticker1",
      title: "Začátek spolupráce",
      items: [
        "Projdeme spolu podmínky spolupráce, případně stipendia",
        "Společně vybereme lokalitu, kde budete působit",
        "Dohodneme podmínky, případně výši stipendia",
        "Podepíšeme smlouvu o spolupráci",
        "U stipendisty možnost pokračovat ve stávající povinné praxi"
      ]
    },
    {
      icon: "/img/briefcase-icon.svg",
      iconClass: "icon2",
      lineClass: "lineProcess2 lineLenght2",
      sticker: "Měsíc 1-5",
      stickerClass: "sticker2",
      title: "Seznámení se s ordinací",
      items: [
        "Fungující ordinace s uzavřenými smlouvami s pojišťovnami",
        "Dohoda o úvazku a časování předání ordinace",
        "Z nabídky si vyberete ubytování. My připravíme případnou relokaci Vás a Vaší rodiny",
        "Účinná propagace nové ordinace zajistí dostatek pacientů"
      ]
    },
    {
      icon: "/img/home-health-icon.svg",
      iconClass: "icon3",
      lineClass: "lineProcess3 lineLenght1",
      sticker: "Měsíc 6",
      stickerClass: "sticker3",
      title: "Plný nástup do ordinace",
      items: [
        "Začnete naplno pracovat v ordinaci",
        "Doladíme administrativní procesy",
        "Počítáme s naplněností kapacity na 80%",
        "Pokračujeme s marketingovými aktivitami a náborem pacientů do 100% kapacity"
      ]
    },
    {
      icon: "/img/diversity-icon.svg",
      iconClass: "icon4",
      lineClass: "lineProcess4 lineLenght4",
      sticker: "Měsíc 9",
      stickerClass: "sticker4",
      title: "Plná kapacita",
      items: [
        "Kapacita ordinace bude naplněna a nově budeme přijímat jen pacienty ze spádové oblasti",
        "Společně budeme zvažovat navýšení kapacity a zavedení nových služeb"
      ]
    },
    {
      icon: "/img/pie-chart-icon.svg",
      iconClass: "icon5",
      lineClass: "",
      sticker: "Měsíc 9+",
      stickerClass: "sticker5",
      title: "Vylepšování služeb",
      items: [
        "Společně si budeme vyhodnocovat spokojenost se spoluprací",
        "Budeme zjišťovat Vaši spokojenost s personálem a případně hledáme nové zaměstnance",
        "Dle Vašich požadavků průběžně zajistíme nové vybavení ordinace",
        "Rozšíříme nabídku o preventivní lékařské služby, případně i prémiový servis a telemedicínu"
      ]
    }
  ];

  const processSell = [
    {
      icon: "/img/forum-icon.svg",
      iconClass: "icon0",
      lineClass: "lineProcess0 lineLenght4",
      sticker: "",
      stickerClass: "",
      title: "Nezávislá konzultace",
      items: [
        "Probereme s Vámi Váš záměr s ordinací",
        "Vysvětlíme možnosti pro prodej, předání nebo správu ordinace"
      ]
    },
    {
      icon: "/img/handshake-icon.svg",
      iconClass: "icon1",
      lineClass: "lineProcess1 lineLenght2",
      sticker: "Měsíc 1",
      stickerClass: "sticker1",
      title: "Začátek spolupráce",
      items: [
        "Podíváme se do detailu na provoz ordinace",
        "Prodiskutujeme finanční oblast prodeje a předání",
        "Nastavíme si celý proces prodeje a předání",
        "Podepíšeme smlouvu o odkupu a nastavíme si dohodnuté podmínky",
        "Zaplatíme Vám za Vaši ordinaci dohodnutou částku"
      ]
    },
    {
      icon: "/img/finance-icon.svg",
      iconClass: "icon2",
      lineClass: "lineProcess2 lineLenght1",
      sticker: "Měsíců 3-6",
      stickerClass: "sticker2",
      title: "Analýza současného stavu",
      items: [
        "Spolu se podíváme na dohodnuté oblasti - administrativu, finanční management, vybavení a případně IT vybavení ordinace",
        "Převezmeme administrativní oblasti",
        "Navrhneme optimalizace dle oblastí dohody"
      ]
    },
    {
      icon: "/img/stethoscope-icon.svg",
      iconClass: "icon4",
      lineClass: "lineProcess4 lineLenght1",
      sticker: "Měsíc 6-12+",
      stickerClass: "sticker4",
      title: "Zajištění nového doktora nebo částečného doktora pro danou ordinaci",
      items: [
        "Dle Vašich preferencí zajistíme nového doktora v předem dohodnutém čase",
        "Případně zajistíme jen částečný úvazek nového doktora, pokud preferujete podstatnou ordinační dobu ordinovat sami"
      ]
    },
    {
      icon: "/img/briefcase-icon.svg",
      iconClass: "icon5",
      lineClass: "",
      sticker: "Měsíc 12+",
      stickerClass: "sticker5",
      title: "Možnost dlouhodobé spolupráce",
      items: [
        "Rádi vám umožníme i dlouhodobou spolupráci - například částečný úvazek"
      ]
    }
  ];

  return (
    <>
      <Header />
      <img className="imgDoctor1" src="/img/doctor-1.png" alt="Image of doctor talking to the pacient" />

      <section className="heroSection container">
        <h2 className="h2">Tradiční</h2>
        <h1 className="h1">Rodinný lékař</h1>
        <div className="heroBtn">
          <button className="btn btnRed" onClick={handleNewClick}>
            Chci ordinaci / stipendium
          </button>
          <button className="btn btnBeige" onClick={handleSellClick}>
            Chci prodat / předat ordinaci
          </button>
        </div>
      </section>

      <section className="benefitsSection">
        <div className="container center">
          <h3 className="h3 benefitsHeadline">Věnujte čas svým pacientům</h3>
          <p className="p benefitsP">
            Spolupráce Vám umožní prodej a hladké předání ordinace anebo zřízení
            nové ordinace. S konceptem Rodinný lékař získáte zázemí a svobodu.
            Spolupráce Vám umožní zřízení vlastní ordinace bez investice Vašich
            finančních prostředků a její následný provoz bez administrativních
            nákladů.
          </p>

          <div className="benefitCards">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefitCard">
                <p className="number numberBeige">{benefit.number}</p>
                <h4 className="h4">{benefit.title}</h4>
                <p className="pSmall">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="strategySection container">
        <div className="strategyContent">
          <div className="strategyCards">
            <div className="strategyCard">
              <h3 className="h3 missionHeadline">Naše mise</h3>
              <p className="p">
                Díky spolupráci s obcemi, městy a kraji vytváříme jedinečnou
                službu, která lékařům umožňuje okamžité zřízení, efektivní provoz
                a neustálý rozvoj své ambulance praktického lékaře.
              </p>
            </div>
            <div className="lineHorizontal"></div>
            <div className="strategyCard">
              <h3 className="h3 visionHeadline">Naše vize</h3>
              <p className="p">
                Navracíme rodinné lékaře do regionů České republiky s cílem
                výrazně zlepšit zdravotní a preventivní péči pro pacienty všech
                věkových skupin v blízkosti jejich bydliště.
              </p>
            </div>
          </div>

          <div className="imgDoctor2">
            <img className="imgDoctor2" src="/img/doctor-2.png" alt="Image of doctor with chart" />
          </div>
        </div>
      </section>

      <section className="stepsSection">
        <div className="container">
          <div className="btnSwitch">
            <button
              className={`btn btnSwitchRed ${activeMode === "new" ? "active" : ""}`}
              onClick={() => setActiveMode("new")}
            >
              Chci ordinaci / stipendium
            </button>
            <button
              className={`btn btnSwitchBeige ${activeMode === "sell" ? "active" : ""}`}
              onClick={() => setActiveMode("sell")}
            >
              Chci prodat / předat ordinaci
            </button>
          </div>

          <div className="stepCards">
            <div className="stepCard center">
              <p className="number colorStepper1 numberRed">1</p>
              <h4 className="h4" id="headingStep1">Získaní stipendia a ordinace</h4>
              <p className="pSmall" id="textStep1">Získaní stipendia a následně vlastní ordinace bez Vašich investic či know-how</p>
            </div>
            <div className="stepCard center">
              <p className="number colorStepper2 numberBeige numberRed">2</p>
              <h4 className="h4" id="headingStep2">Čas na to, čím jste</h4>
              <p className="pSmall" id="textStep2">Budete mít prostor na Vaše pacienty a jejich léčbu. Administrativu, programy, finance a provozní záležitosti vyřešíme za Vás</p>
            </div>
            <div className="stepCard center">
              <p className="number colorStepper3 numberRed">3</p>
              <h4 className="h4" id="headingStep3">Silné zázemí</h4>
              <p className="pSmall" id="textStep3">Budete mít o koho se opřít - a postupně růst dle Vašich přání</p>
            </div>
          </div>
        </div>
      </section>

      <section className="processSection" id="want-sell" style={{ display: activeMode === "sell" ? "block" : "none" }}>
        <h3 className="h3 sellHeadline center">Jak prodej a předání fungují</h3>
        <div className="processContent container">
          {processSell.map((step, index) => (
            <div key={index} className="processMonth">
              <div className="circleLine">
                <img className={`icon ${step.iconClass}`} src={step.icon} alt="icon" />
                {step.lineClass && <div className={`lineProcess ${step.lineClass}`}></div>}
              </div>
              <div>
                {step.sticker && <p className={`sticker ${step.stickerClass}`}>{step.sticker}</p>}
                <p className="pLarge">{step.title}</p>
                <ul className="processDescription">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="pSmall">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="processSection" id="want-new" style={{ display: activeMode === "new" ? "block" : "none" }}>
        <h3 className="h3 newHeadline center">Jak proběhne zajištění Vaší ordinace?</h3>
        <div className="processContent container">
          {processNew.map((step, index) => (
            <div key={index} className="processMonth">
              <div className="circleLine">
                <img className={`icon ${step.iconClass}`} src={step.icon} alt="icon" />
                {step.lineClass && <div className={`lineProcess ${step.lineClass}`}></div>}
              </div>
              <div>
                {step.sticker && <p className={`sticker ${step.stickerClass}`}>{step.sticker}</p>}
                <p className="pLarge">{step.title}</p>
                <ul className="processDescription">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="pSmall">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
