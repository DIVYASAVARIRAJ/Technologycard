// Write your code here.

import './index.css'

const CardItem = props => {
  const {CardDetails} = props
  const {title, description, imgUrl, className} = CardDetails

  return (
    <li className={`${className} card-item`}>
      <div>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
