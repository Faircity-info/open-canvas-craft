export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerLinks container">
        <a className="footerLink" href="https://cslekar.cz">
          <img
            className="footer-logo"
            src="/img/logo-white.svg"
            alt="logo-rodinny-lekar"
          />
        </a>

        <div className="footerBox">
          <h4 className="h4 footerHeadline">Adresa</h4>
          <p className="pFooter">Český lékař s.r.o.</p>
          <p className="pFooter">IČO: 21466891</p>
          <p className="pFooter">Fráni Šrámka 2340/35</p>
          <p className="pFooter">150 00, Praha 5</p>
        </div>

        <div className="footerBox">
          <h4 className="h4 footerHeadline">Kontakty</h4>
          <div className="footerLink">
            <img src="/img/call.svg" alt="telefon" />
            <a className="footerContact" href="tel:+420603939555">
              +420 603 939 555
            </a>
          </div>
          <div className="footerLink">
            <img src="/img/mail.svg" alt="email" />
            <a className="footerContact" href="mailto:kariera@cslekar.cz">
              kariera@cslekar.cz
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">&copy; 2025 Rodinný lékař</div>
    </footer>
  );
};

