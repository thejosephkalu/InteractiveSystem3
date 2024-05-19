import { useParams } from "react-router-dom"

export const ProductDetail = () => {

  const params = useParams();

  return (
    <div>This is the Product {params.id} Detail page</div>
  )
}
