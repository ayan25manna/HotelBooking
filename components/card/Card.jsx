import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ item }) {
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className='imgContainer'>
        <img src={item.img} alt="" />
      </Link>
      <div className='textContainer'>
        <h2 className='title'>
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className='address'>
          <img src="../../../public/public/location.png" alt="" />
          <span>{item.address} </span>
        </p>
        <p className='price'>₹{item.price}</p>
        <div className='bottom'>
          <div className="features">
            <div className="feature">
              <img src="../../../public/public/bed.png" alt="" />
              <span>{item.bedRoom} bedRoom </span>
            </div>
            <div className="feature">
              <img src="../../../public/public/bath.png" alt="" />
              <span>{item.bathRoom} bathRoom </span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="../../../public/public/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="../../../public/public/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;