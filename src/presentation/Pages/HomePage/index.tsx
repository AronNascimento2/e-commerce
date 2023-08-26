import { useEffect, useState } from 'react'
import { getProducts } from '../../../data/useCases/getProducts'
import * as S from './styles'
import { ProductModel } from '../../../domain/models/productsModel'
import { Header } from '../../components/Header'
import { CheckoutPage } from '../CheckOutPage'
import { ProductCard } from '../../components/ProductCard'

export const HomePage: React.FC = () => {
  const [products, setProducts] = useState<ProductModel[]>([])
  const [showPage, setShowPage] = useState(true)
  const [cartItems, setCartItems] = useState<ProductModel[]>([])
  const [loadingStates, setLoadingStates] = useState<{
    [key: number]: boolean
  }>({})

  useEffect(() => {
    getProducts()
      .then((productsData: ProductModel[]) => {
        setProducts(productsData)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const addToCart = (product: ProductModel) => {
    setLoadingStates((prevLoadingStates) => ({
      ...prevLoadingStates,
      [product.id]: true
    }))

    setTimeout(() => {
      setCartItems((prevCartItems) => [...prevCartItems, product])
      setLoadingStates((prevLoadingStates) => ({
        ...prevLoadingStates,
        [product.id]: false
      }))
    }, 1000)
  }

  return (
    <div>
      <Header
        setCartItems={setCartItems}
        setShowPage={setShowPage}
        cartItems={cartItems}
      />
      {showPage ? (
        <S.Container>
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              loadingStates={loadingStates}
            />
          ))}
        </S.Container>
      ) : (
        <CheckoutPage
          setShowPage={setShowPage}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      )}
    </div>
  )
}
