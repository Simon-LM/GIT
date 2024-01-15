import '../../main.scss'
import imageHome from '../../assets/images/Image_Home.png'
import HousingInformations from '../../assets/Datas/Housing_information.json'
import Heading from '../../composents/Heading/Heading'
import Card from '../../composents/Card/Card'

function Home() {
  const srcImgHeading = imageHome
  const srcImgCard = HousingInformations
  return (
    <div className="home">
      <Heading srcImage={srcImgHeading} />
      <div className="home__title__background"></div>
      <h1 className="home__title">Chez vous, partout et ailleurs</h1>
      <div className="home__background-cards">
        {/* <div className="home__cards">
          <img
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
            className="card__img"
            alt="Logement"
          />
          card 1
        </div> */}

        {srcImgCard.map((card) => (
          <Card
            key={card.id}
            srcImage={card.cover}
            titleImage={card.title}
            altImage={card.title}
          />
        ))}
        {/* <Card srcImage={srcImgCard[0]['cover']} />
        <Card srcImage={srcImgCard[1]['cover']} />
        <Card srcImage={srcImgCard[2]['cover']} />
        <Card srcImage={srcImgCard[3]['cover']} />
        <Card srcImage={srcImgCard[4]['cover']} />
        <Card srcImage={srcImgCard[5]['cover']} />
        <Card srcImage={srcImgCard[6]['cover']} />
        <Card srcImage={srcImgCard[7]['cover']} />
        <Card srcImage={srcImgCard[8]['cover']} /> */}
        {/* <div className="home__cards">card 2</div> */}
        {/* <div className="home__cards">card 3</div> */}
        {/* <div className="home__cards">card 4</div> */}
        {/* <div className="home__cards">card 5</div> */}
        {/* <div className="home__cards">card 6</div> */}
      </div>
    </div>
  )
}

export default Home
