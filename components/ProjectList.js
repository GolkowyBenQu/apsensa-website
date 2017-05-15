import React from 'react'

import Project from './Project'

class ProjectList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      projects: [
        {
          image: "images/max-fliz.png",
          pageUrl: "maxfliz.php",
          title: "Max - Fliz",
          description: "Wyposażenie wnętrz - katalog produktów"
        },
        {
          image: "images/eurobid.png",
          pageUrl: "eurobid.php",
          title: "Eurobid",
          description: "Aukcje internetowe - licytuj i wygrywaj"
        },
        {
          image: "images/mis.png",
          pageUrl: "medinvest.php",
          title: "Med Invest Scanner",
          description: "Analiza medyczna, płatny dostęp dla udziałowców oraz przepływ informacji"
        },
        {
          image: "images/bazkon_mobile1.jpg",
          pageUrl: "baza_kontrahentow.php",
          title: "Baza Kontrahentów",
          description: "Umowy, klienci, dokumenty - wszystko w jednym miejscu"
        },
        {
          image: "images/fyc.png",
          pageUrl: "fyc.php",
          title: "Find Your Commuter",
          description: "Komunikacja podróżujących metrem, umili czas podróży"
        },
        {
          image: "images/haiku.jpg",
          pageUrl: "haiku.php",
          title: "Haiku Sushi",
          description: "Akcja promocyjna z kuponami rabatowymi - zniżki na sushi"
        }
      ]
    }
  }

  render() {
    return (
      <section id="projects" className="tiles">
        {
          this.state.projects.map(
            (project, i) => <Project
              key = {i}
              image = {project.image}
              pageUrl = {project.pageUrl}
              title = {project.title}
              description = {project.description}
            />
          )
        }
      </section>
    )
  }
}

export default ProjectList