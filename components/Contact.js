import React from 'react'

class Contact extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    const field = event.target.name
    const state = this.state
    state[field] = event.target.value

    this.setState(state)
  }

  onSubmit(event) {
    event.preventDefault()

    const config = {
      method: 'POST',
      // credentials: 'same-origin',
      headers: {
        // 'Accept': 'application/json',
        // 'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded'
      },
      // body: formData
      body: JSON.stringify(this.state)
    }

    const promise = fetch('http://127.0.0.1:8000/api.php?action=sendMessage', config)

    promise
      .catch(error => console.log(error))
      .then(result => result.json())
      .then(json => {
        if (json === 'success') {
          document.getElementById('contactThankyou').style.display = 'block'
        }
      })
  }

  render() {
    return(
      <section id="contact">
        <div className="inner">
          <section>
            <div id="contactThankyou" className="box">
              <p>Dziękujemy za wysłanie wiadomości. Skontaktujemy się z Tobą w ciągu 24 godzin.</p>
            </div>
            <form method="post" action="#contact" onSubmit={this.onSubmit}>
              <div className="field half first">
                <label htmlFor="name">Nazwa firmy / Imię</label>
                <input type="text" name="name" id="name" onChange={this.onChange} />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" onChange={this.onChange} />
              </div>
              <div className="field">
                <label htmlFor="message">Wiadomość</label>
                <textarea name="message" id="message" rows="6" onChange={this.onChange}></textarea>
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