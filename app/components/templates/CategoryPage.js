import Category from '../module/Category';
import carsData from '@/app/data/carsData';
import Stayles from './CategoryPage.module.css'

function CategoryPage({ URL }) {


  const Infocar = carsData.filter(item => URL === item.category)
  return (
    <div className={Stayles.container}>
      {
        Infocar.map(data => (
          <Category key={data.id} carCat={data}/>
        ))
      }
    </div>
  )
}

export default CategoryPage