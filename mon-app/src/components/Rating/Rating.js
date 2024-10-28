import starRed from '../../assets/Icons/star.svg'
import starGrey from '../../assets/Icons/Star_Grey.svg'

const Rating = ({ rating }) => {
  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(
      <img
        key={i}
        src={i < rating ? starRed : starGrey}
        alt="star"
        className="star"
      />
    )
  }
  return <div className="rating">{stars}</div>
}

export default Rating
