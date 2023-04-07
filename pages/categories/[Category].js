import { useRouter } from "next/router";
import CategoryPage from '@/app/components/templates/CategoryPage'

function Category() {
  const router = useRouter();

  return (
    <CategoryPage URL={router.query.Category}/>
  )
}

export default Category