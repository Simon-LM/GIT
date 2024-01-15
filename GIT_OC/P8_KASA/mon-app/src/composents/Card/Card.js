import '../../main.scss'

function Card(props) {
  // const srcImg = imageAbout
  return (
    <button className="card">
      {/* <img
        className="card__img"
        src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
        alt="Logement"
          /> */}
      <p className="card__title">{props.titleImage}</p>

      <img
        className="card__img"
        src={props.srcImage}
        alt={props.altImage}
        title={props.titleImage}
      />
      {/* <p className="card__title">{props.titleImage}</p> */}
    </button>
  )
}

export default Card
