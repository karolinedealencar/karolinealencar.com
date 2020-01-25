import React from "react"
import { Link } from "gatsby"

const CV = () => (
  <main>
    <header>
      <div>
        <h1>Karoline Alencar</h1>
        <h2>Bauru, São Paulo</h2>
        <p>karolinedalencar@gmail.com</p>
        <p>(15) 99844-7407</p>
        <a
          href="https://www.linkedin.com/in/karolinedealencar/"
          title="Linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>{" "}
        |
        <a
          href="https://github.com/karolinedealencar/"
          title="Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |
        <Link to="/" title="Blog" rel="noopener noreferrer">
          Blog
        </Link>
      </div>
    </header>
    <div>
      <section>
        <h3>Formação</h3>
        <ul>
          <li>Análise e Desenvolvimento de Sistemas</li>
        </ul>
      </section>
      <section>
        <h3>Experiência Profissional</h3>
        <ul>
          <li>Lirix | Desenvolvedor Front-end - Dezembro/2016 - Julho/2018</li>
          <li>Dicas MEI | Desenvolvedor Front-end - Julho/2018 - Atualmente</li>
        </ul>
      </section>
      <section>
        <h3>Minhas Talks</h3>
        <ul>
          <li>
            <a
              href="https://www.slideshare.net/KarolineAlencar/talk-sorocabacss-entendendo-box-model"
              title="Slides"
              target="_blank"
              rel="noopener noreferrer"
            >
              SorocabaCSS - Entendendo Box Model
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h3>Cursos</h3>
        <ul>
          <li>JavaScript Ninja - Fernando Daciuk</li>
          <li>CSS Workshop - Rachel Andrews</li>
          <li>Organização de CSS - Afonso Pacifer</li>
          <li>ES6 for Everyone! - Wes Bos</li>
          <li>SVG Do Início ao Avançado - Willian Justen</li>
        </ul>
      </section>
      <section>
        <h3>Projetos</h3>
        <ul>
          <li>
            <a
              href="https://dev.to/karolinedealencar/updating-background-with-speechrecognition--custom-properties-593p"
              target="_blank"
              rel="noopener noreferrer"
            >
              dev.to Post "Updating Background with SpeechRecognition & Custom
              Properties"
            </a>
          </li>
          <li>
            <a
              href="https://karolinealencar.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog em inglês
            </a>
          </li>
          <li>
            <a
              href="https://github.com/karolinedealencar/thesims-price-scraping"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Sims 4 Price Scraping with NodeJS, Puppeteer & Nodemailer
            </a>
          </li>
          <li>
            <a
              href="https://karolinedealencar.github.io/github-user-info/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github User Info
            </a>
          </li>
          <li>
            <a
              href="https://karolinedealencar.github.io/webcam-fun/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fun with Webcam
            </a>
          </li>
          <li>
            <a
              href="https://karolinedealencar.github.io/native-speech-recognition/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Native Speech Detection
            </a>
          </li>
          <li>
            <a
              href="https://karolinedealencar.github.io/JS-drum-kit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript Drum Kit
            </a>
          </li>
          <li>
            <a
              href="https://karolinedealencar.github.io/to-do-list/"
              target="_blank"
              rel="noopener noreferrer"
            >
              To-do List
            </a>
          </li>
          <li>
            <a
              href="https://karolinedealencar.github.io/flex-panels-gallery/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSS Panels Gallery
            </a>
          </li>
          <li>
            <a
              href="https://karolinedealencar.github.io/pokemon-by-habitat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pokemon By Habitat
            </a>
          </li>
          <li>
            <a
              href="https://karolinedealencar.github.io/css-var-and-js/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Update CSS Variables with JS
            </a>
          </li>
        </ul>
      </section>
    </div>
  </main>
)

export default CV
