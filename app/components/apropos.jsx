// components/apropos.jsx

import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>À propos de moi</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            En tant que développeur, j'ai toujours été passionné par la création de solutions élégantes et efficaces pour résoudre des problèmes complexes.
            Je possède une solide base en développement logiciel, avec un accent sur les technologies web telles que HTML, CSS et JavaScript. 
            J'apprécie de travailler à la fois sur le front-end et le back-end des applications, et je suis toujours à la recherche de moyens d'optimiser les performances, d'améliorer l'expérience utilisateur et de garantir le plus haut niveau de qualité de code.
          </p>
          <p>Tout au long de ma formation, j'ai travaillé sur une large gamme de projets, allant de simples sites web statiques à des applications d'entreprise complexes. 
            J'ai de l'expérience dans l'utilisation de divers outils et frameworks de développement, notamment React, Angular, Vue.js, Node.js et Laravel. 
            Je suis toujours avide d'apprendre et d'explorer de nouvelles technologies, et je suis constamment à la recherche d'opportunités pour améliorer mes compétences et mes connaissances.</p>
        </div>
        <div className="about-img">
          <Image src='/images/coding.jpg' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;