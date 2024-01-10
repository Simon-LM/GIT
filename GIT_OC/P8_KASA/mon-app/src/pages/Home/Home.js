import './Home.scss'
import Heading from '../../composents/Heading/Heading'
import imageHome from '../../assets/images/Image_Home.png'

function Home() {
  const srcImg = imageHome
  return (
    <div className="home">
      <Heading srcImage={srcImg} />
      <div className="home__title__background"></div>
      <h1 className="home__title">Chez vous, partout et ailleurs</h1>
      <div className="home__background-cards">
        <div className="home__cards">card 1</div>
        <div className="home__cards">card 2</div>
        <div className="home__cards">card 3</div>
        <div className="home__cards">card 4</div>
        <div className="home__cards">card 5</div>
        <div className="home__cards">card 6</div>
      </div>
    </div>
  )
}

export default Home
