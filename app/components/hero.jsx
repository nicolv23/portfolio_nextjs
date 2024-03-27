// components/hero.jsx

import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="Joe's personal headshot" />
      <div className="hero-text">
        <h1>Bonjour, je m'appelle Nicolas Lazarte 👋</h1>
        <p>
        Étudiant en Programmation au Collège de Rosemont, je suis toujours à la recherche d'apprendre des nouvelles technologies.
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/nicolv23"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-lazarte-2b3441262/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;