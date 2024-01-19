import { Link } from 'react-router-dom'
import './Card.scss'

function Card(props) {
  return (
    <Link className="card" to={`/property/${props.link}`}>
      {/* <button className=""> */}
      <p className="card__title">{props.titleImage}</p>

      <img
        className="card__img"
        src={props.srcImage}
        alt={props.altImage}
        title={props.titleImage}
      />
      {/* </button> */}
    </Link>
  )
}

export default Card
