import Heading from '../../composents/Heading/Heading'
import './About.scss'
import imageAbout from '../../assets/images/Image_About.png'

function About() {
  const srcImg = imageAbout
  return (
    <div className="about">
      <Heading srcImage={srcImg} />
      <div className="about__collapses">
        <div className="about__collapse">Fiabilité</div>
        <div className="about__collapse">Respect</div>
        <div className="about__collapse">Service</div>
        <div className="about__collapse">Sécurité</div>
      </div>
    </div>
  )
}

export default About

// srcImage={image.about}
