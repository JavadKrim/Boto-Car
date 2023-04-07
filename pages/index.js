import carsData from '@/app/data/carsData'
import { Inter } from 'next/font/google'
import Categories from '@/app/components/module/Categories'
import SearchBar from '@/app/components/module/SearchBar'
import CarsPage from '@/app/components/templates/CarsPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Categories/>
      <SearchBar/>
      <CarsPage data={carsData}/>
    </>
  )
}
