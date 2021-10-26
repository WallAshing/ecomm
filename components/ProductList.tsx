import Product, {IProduct} from "./Product"

interface IProductListProps {
      products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
      return (
            <div>
                  {props.products.map((product, index) => 
                        <Product key={index} product={product} />
                  )}
            </div>
      )
}

export default ProductList