import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Kariera = () => {
  useEffect(() => {
    const handleInterestClick = () => {
      const footerElement = document.querySelector('.footer');
      if (footerElement) {
        footerElement.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      }
    };

    const buttons = document.querySelectorAll('.btnCareer');
    buttons.forEach(button => {
      button.addEventListener('click', handleInterestClick);
    });

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('click', handleInterestClick);
      });
    };
  }, []);

  const positions = [
    {
      title: "Praktický lékař pro dospělé",
      requirements: "Odbornou způsobilost k výkonu povolání lékaře a specializovanou způsobilost v oboru všeobecného praktického lékařství (L3). Hledáme lékaře s aktivním přístupem k práci, vysokou zodpovědností a schopností pracovat jak samostatně, tak v týmu.",
      benefits: [
        { icon: "/img/payment-icon.svg", text: "Nadstandardní platové ohodnocení" },
        { icon: "/img/icons-support.svg", text: "Komplexní relokační podpora" },
        { icon: "/img/icons-auto-stories.svg", text: "Odborný rozvoj a vzdělávání" },
        { icon: "/img/icons-local-dining.svg", text: "Příspěvek na stravování" },
        { icon: "/img/calendar_month.svg", text: "5 týdnů dovolené" },
      ]
    },
    {
      title: "Praktický lékař pro děti a dorost",
      requirements: "Odbornou způsobilost k výkonu povolání lékaře a specializovanou způsobilost v oboru praktického lékařství pro děti a dorost (L3). Hledáme lékaře se schopností komunikovat s dětmi a jejich rodiči, s empatií a trpělivostí.",
      benefits: [
        { icon: "/img/payment-icon.svg", text: "Nadstandardní platové ohodnocení" },
        { icon: "/img/icons-support.svg", text: "Komplexní relokační podpora" },
        { icon: "/img/icons-auto-stories.svg", text: "Odborný rozvoj a vzdělávání" },
        { icon: "/img/icons-local-dining.svg", text: "Příspěvek na stravování" },
        { icon: "/img/calendar_month.svg", text: "5 týdnů dovolené" },
      ]
    },
    {
      title: "Praktický lékař pro dospělé, který pobírá stipendium",
      requirements: "Ukončené lékařské vzdělání a zájem o specializaci v oboru všeobecného praktického lékařství (L1, L2). Hledáme motivované jedince připravené na další vzdělávání a osobní růst.",
      benefits: [
        { icon: "/img/payment-icon.svg", text: "Nadstandardní platové ohodnocení" },
        { icon: "/img/icons-support.svg", text: "Komplexní relokační podpora" },
        { icon: "/img/toll-icon.svg", text: "Stipendium do získání atestace" },
        { icon: "/img/icons-stethoscope.svg", text: "Moderní pracoviště" },
        { icon: "/img/icons-award-star.svg", text: "Kariérní stabilita po rezidentuře" },
      ]
    },
    {
      title: "Praktický lékař pro děti a dorost, který pobírá stipendium",
      requirements: "Ukončené lékařské vzdělání a zájem o specializaci v oboru praktického lékařství pro děti a dorost (L1, L2). Hledáme motivované jedince připravené na další vzdělávání a osobní růst.",
      benefits: [
        { icon: "/img/payment-icon.svg", text: "Nadstandardní platové ohodnocení" },
        { icon: "/img/icons-support.svg", text: "Komplexní relokační podpora" },
        { icon: "/img/toll-icon.svg", text: "Stipendium do získání atestace" },
        { icon: "/img/icons-stethoscope.svg", text: "Moderní pracoviště" },
        { icon: "/img/icons-award-star.svg", text: "Kariérní stabilita po rezidentuře" },
      ]
    },
    {
      title: "Zdravotní sestra",
      requirements: "Odbornou způsobilost k výkonu povolání zdravotní sestry a praxi v ambulantním provozu, která je výhodou. Hledáme týmové hráče s empatií a komunikačními dovednostmi.",
      benefits: [
        { icon: "/img/payment-icon.svg", text: "Nadstandardní platové ohodnocení" },
        { icon: "/img/icons-local-dining.svg", text: "Příspěvek na stravování" },
        { icon: "/img/icons-award-star.svg", text: "Stabilní zaměstnání" },
        { icon: "/img/icons-arrows-more-up.svg", text: "Profesní růst a vzdělávání" },
        { icon: "/img/icons-diversity-3.svg", text: "Odborný rozvoj a vzdělávání" },
      ]
    },
  ];

  return (
    <>
      <Header />
      <section className="sectionCareer">
        <div className="container">
          <div className="careerHeadline">
            <h1 className="careerH1">Kariéra</h1>
          </div>

          <div className="positionCards">
            {positions.map((position, index) => (
              <div key={index} className="positionCard">
                <div className="position">
                  <h5 className="h5">{position.title}</h5>
                  <h4 className="h4 h4Career">Požadujeme</h4>
                  <p className="p">{position.requirements}</p>
                </div>
                <div className="benefits">
                  <h4 className="h4 h4Career">Nabízíme</h4>
                  {position.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="benefit">
                      <img
                        className="smallIcon"
                        src={benefit.icon}
                        alt="benefit-icon"
                      />
                      <p className="p">{benefit.text}</p>
                    </div>
                  ))}
                </div>
                <button className="btn btnBeige btnCareer">Mám zájem</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionCareerContact">
        <div className="container">
          <div className="careerContact center">
            <h3 className="h3 h3Career">Kontakt</h3>
            <p className="p">
              Pokud máte zájem, zašlete nám na sebe kontakt, případně životopis
            </p>
            <a className="linkCareer" href="mailto:kariera@cslekar.cz">
              kariera@cslekar.cz
            </a>
            <p className="p">nebo volejte na číslo</p>
            <a className="linkCareer" href="tel:+420603939555">+420 603 939 555</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Kariera;

