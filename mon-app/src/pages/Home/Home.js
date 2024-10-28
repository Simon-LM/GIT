import imageHome from '../../assets/images/Image_Home.png'
import HousingInformations from '../../assets/Datas/Housing_information.json'
import Heading from '../../components/Heading/Heading'
import Card from '../../components/Card/Card'

function Home() {
  const srcImgHeading = imageHome
  const srcImgCard = HousingInformations
  return (
    <div className="home">
      <Heading srcImage={srcImgHeading} />
      <div className="home__title__background"></div>
      <h1 className="home__title">Chez vous, partout et ailleurs</h1>
      <div className="home__background-cards">
        {srcImgCard.map((card) => (
          <Card
            link={card.id}
            key={card.id}
            srcImage={card.cover}
            titleImage={card.title}
            altImage={card.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
