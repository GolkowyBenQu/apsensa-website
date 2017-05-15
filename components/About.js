import React from 'react'

class About extends React.Component {
  render() {
    return(
      <div id="about" className="inner">
        <header className="major">
          <h2>Kim jesteśmy</h2>
        </header>
        <p>
          Tworzymy aplikacje internetowe od kilku lat. Pracowaliśmy z wieloma technologiami, w wielu branżach.
          Ponieważ poznaliśmy tworzenie aplikacji z różnych stron, jesteśmy w stanie zaproponować odpowiednie rozwiązanie, oraz technologie, dokładnie dopasowane do potrzeb naszych klientów.
        </p>
        <p>
          Nasz zespół składa się z kilku programistów, oraz web designera. Wszyscy kiedyś pracowaliśmy dla innych firm, korporacji i agencji reklamowych.
          Połączyliśmy jednak siły, by tworzyć aplikacje w nowy sposób, wykorzystując do tego technologie dopasowane ściśle do klienta, nie zaś do regulaminu firmy.
        </p>
        <p>
          Staramy się pracować zwinnie, czyli regularnie dostarczać klientowi działający produkt, a z kolejnymi iteracjami dodawać nowe funkcjonalności.
          Nasz metodyka pracy daje nam możliwość szybkiego wprowadzania uwag klienta do tworzonego produktu, a klient niemal od razu widzi efekty zmian.
        </p>
        <ul className="actions">
          <li><a href="#contact" className="button next scrolly">Przywitaj się z nami</a></li>
        </ul>
      </div>
    )
  }
}

export default About