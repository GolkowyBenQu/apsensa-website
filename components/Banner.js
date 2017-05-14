import React from 'react'

class Banner extends React.Component {
    render() {
        return(
            <section id="banner" className="major">
                <div className="inner">
                    <header className="major">
                        <h1>Cześć, jesteśmy Apsensa</h1>
                    </header>
                    <div className="content">
                        <p>Twój team, do tworzenia aplikacji internetowych.
                            <br/> Aby ułatwić Ci pracę i zwiększyć Twoje zyski.</p>
                        <ul className="actions">
                            <li><a href="#contact" className="button next scrolly">Zapytaj o projekt</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner