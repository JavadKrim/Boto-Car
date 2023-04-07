import Location from '../icons/Location';
import Link from 'next/link';
import Style from './Category.module.css';


function Category({ carCat }) {

  const { id, name, model, year, distance, location, image, price } = carCat;
  
  return (
    <Link href={`/cars/${id}`} className={Style.container}>
      <img src={image} alt="Product" className={Style.image} />
      <h4 className={Style.title}>{`${name} ${model}`}</h4>
      <p className={Style.detail}>{`${year}.${distance}km`}</p>
      <div className={Style.footer}>
        <p>$ {price}</p>
        <div className={Style.location}>
          <p>{location}</p>
          <Location />
        </div>
      </div>
    </Link>
  )
}

export default Category