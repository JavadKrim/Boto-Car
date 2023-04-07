import carsData from '@/app/data/carsData'
import CarsPage from '@/app/components/templates/CarsPage'

function index() {
  return (
    <>
        <CarsPage data={carsData}/>
    </>
  )
}

export default index