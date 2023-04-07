import carsData from '@/app/data/carsData'
import CarDetails from '@/app/components/templates/CarDetails';
import { useRouter } from 'next/router';

function DetailsCars() {

    const router = useRouter();
    const { carId } = router.query
    const idData = carsData[carId - 1];
  return (
    <CarDetails {...idData}/>
  )
}

export default DetailsCars;