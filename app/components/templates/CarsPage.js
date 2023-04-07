import Car from '../module/Car'
import Stayles from './CarsPage.module.css'


function CarsPage({ data }) {

  return (
    <div className={Stayles.container}>
        {
            data.map(( data )=>(
                <Car key={ data.id } {...data}/>
            ))
        }
    </div>
  )
}

export default CarsPage