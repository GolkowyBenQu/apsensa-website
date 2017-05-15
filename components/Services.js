import React from 'react'

class Services extends React.Component {
  render() {
    return(
      <div id="services" className="inner">
        <header className="major">
          <h2>Co robimy</h2>
        </header>
        <div className="row">
          <div className="4u 12u$(medium)">
            <h3>System zarządzania treścią</h3>
            <p>
              Strona internetowa dla Twojej firmy lub usługi? Nie ma problemu. W swojej karierze zrealizowaliśmy mnóstwo stron internetowych.
              Wiemy, w jaki sposób możemy Ci pomóc zarządzać stroną, oraz jakie są aktualne trendy wyglądu strony, by przyciągała uwagę klientów.
            </p>
          </div>
          <div className="4u 12u$(medium)">
            <h3>Narzędzia e-commerce</h3>
            <p>
              Potrzebujesz wyeksponować produkt, podpiąć płatności do strony lub śledzić stany magazynowe Twoich towarów?
              My pomożemy Ci sprzedać Twoje usługi i produkty, dodamy do tego raporty i statystyki.
              Damy Ci gotowe narzędzie wspomagające Twoją sprzedaż, dostęp z dowolnego miejsca oraz system uprawnień dla pracowników.
            </p>
          </div>
          <div className="4u$ 12u$(medium)">
            <h3>Aplikacja dedykowana</h3>
            <p>
              Projekt dopasowany do potrzeb klienta, według jego własnego pomysłu.
              Jesteśmy otwarci na nowatorskie rozwiązania, chętnie pomożemy w tworzeniu panelu zarządzania zasobami firmy, generatora raportów, czy innej aplikacji promocyjnej.
              Wszystko zależy od Twojego pomysłu i potrzeb.
            </p>
          </div>
        </div>
        <ul className="actions">
          <li><a href="#contact" className="button next scrolly">Zapytaj o usługę</a></li>
        </ul>
      </div>
    )
  }
}

export default Services