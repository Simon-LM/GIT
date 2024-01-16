import Heading from '../../composents/Heading/Heading'
import Collapse from '../../composents/Collapse/Collapse'
import '../../main.scss'
// import '../../color-variables.scss'

import imageAbout from '../../assets/images/Image_About.png'
// import imageArrow from '../../assets/images/arrow_about.svg'

function About() {
  const srcImg = imageAbout
  // const srcArrow = imageArrow

  // const collapse = document.getElementsByClassName('about__collapse__text1')
  // const arrow = document.getElementsByClassName('about__arrows1')
  // arrow.addEventListener('click', () => {
  //   if (collapse.visibility === 'collapse') {
  //     collapse.visibility = 'visible'
  //     // console.log('Click to make the text visible')
  //   } else {
  //     collapse.visibility = 'collapse'
  //     // console.log('Click to make the text caché')
  //   }
  // })
  return (
    <div className="about">
      <Heading srcImage={srcImg} />
      <div className="about__collapses">
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos équipes."
          className="collapse--about"
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme. "
          className="collapse--about"
        />
        <Collapse
          title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."
          className="collapse--about"
        />
        <Collapse
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes."
          className="collapse--about"
        />
        {/* <div className="about__collapse">
          <div className="about__collapse__head">
            Fiabilité
            <button className="about__arrows about__arrows1">
              <img className="" src={srcArrow} alt="logo" />
            </button>
          </div>
          <p className="about__collapse__text">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </div>
        <div className="about__collapse">
          <div className="about__collapse__head">
            Respect
            <button className="about__arrows">
              <img className="" src={srcArrow} alt="logo" />
            </button>
          </div>
          <p className="about__collapse__text about__collapse__text1">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre platforme.
          </p>
        </div>
        <div className="about__collapse">
          <div className="about__collapse__head">
            Service
            <button className="about__arrows">
              <img className="" src={srcArrow} alt="logo" />
            </button>
          </div>
          <p className="about__collapse__text">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre platforme.
          </p>
        </div>
        <div className="about__collapse">
          <div className="about__collapse__head">
            Sécurité
            <button className="about__arrows">
              <img className="" src={srcArrow} alt="logo" />
            </button>
          </div>
          <p className="about__collapse__text">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note bien à
            l'hôte qu'au locatiare, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisns également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default About
