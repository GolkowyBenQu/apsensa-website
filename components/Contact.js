import React from 'react'

class Contact extends React.Component {
  render() {
    return(
      <section id="contact">
        <div className="inner">
          <section>
            <form method="post" action="#contact">
              <div className="field half first">
                <label htmlFor="name">Nazwa firmy / Imię</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Wiadomość</label>
                <textarea name="message" id="message" rows="6"></textarea>
              </div>
              <ul className="actions">
                <li><input type="submit" name="submit" value="Wyślij wiadomość" className="special" /></li>
              </ul>
            </form>
          </section>
          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon alt fa-envelope"></span>
                <h3>Email</h3>
                <a href="#">hello@apsensa.pl</a>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon alt fa-phone"></span>
                <h3>Telefon</h3>
                <span>(48) 888 577 889</span>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon alt fa-home"></span>
                <h3>Adres</h3>
                <span>http://apsensa.pl<br />
										Kraków, Polska<br /></span>
              </div>
            </section>
          </section>
        </div>
      </section>
    )
  }
}

export default Contact