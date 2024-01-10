import Heading from '../../composents/Heading/Heading'
import './About.scss'
import imageAbout from '../../assets/images/Image_About.png'

function About() {
  const srcImg = imageAbout
  return (
    <div className="about">
      <Heading srcImage={srcImg} />
      <h2>À propos</h2>
      <p>rrr</p>
    </div>
  )
}

export default About

// srcImage={image.about}
