import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleContactClick = () => {
    setIsNavOpen(false);
    const footerElement = document.querySelector('.footer');
    if (footerElement) {
      footerElement.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  };

  return (
    <header className="container">
      <div className={`header ${isNavOpen ? 'navOpen' : ''}`}>
        <div className="headerLogo">
          <div className="headerClaim">
            <img
              className="logo"
              src="/img/rodinny-lekar-logo-color.svg"
              alt="Logo Rodinný lékař"
            />
            <div className="lineVertical"></div>
            <p className="pSmall claim">Vaše vlastní ordinace bez starostí...</p>
          </div>
          <button 
            className="btnMobileNav2"
            onClick={() => setIsNavOpen(true)}
            aria-label="Otevřít menu"
          >
            <img className="menuIcon" src="/img/menu-icon.svg" alt="menu-icon" />
          </button>
        </div>
        <nav className="mainNav">
          <div className="mobileNavTop">
            <img
              className="logoMobileNav"
              src="/img/rodinny-lekar-logo-color.svg"
              alt="Logo Rodinný lékař"
            />
            <button 
              className="btnMobileNav"
              onClick={() => setIsNavOpen(false)}
              aria-label="Zavřít menu"
            >
              <img
                className="closeIcon"
                src="/img/close-icon.svg"
                alt="close-icon"
              />
            </button>
          </div>
          <ul className="mainNavList">
            <li className="mainNavLink">
              <Link to="/" className="mainNavLink" onClick={() => setIsNavOpen(false)}>
                Domů
              </Link>
            </li>
            <li className="mainNavLink">
              <Link to="/kariera" className="mainNavLink" onClick={() => setIsNavOpen(false)}>
                Kariéra
              </Link>
            </li>
            <li className="mainNavLink">
              <span 
                className="mainNavLink" 
                id="contact-link"
                onClick={handleContactClick}
                style={{ cursor: 'pointer' }}
              >
                Kontakty
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

