import { useEffect, useState } from 'react'
import { getProducts } from '../../../data/useCases/getProducts'
import * as S from './styles'
import { ProductModel } from '../../../domain/models/productsModel'
import { formatPrice } from '../../utils/formatPrice'
import { Header } from '../../components/Header'
import { CheckoutPage } from '../CheckOutPage'

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
        setProducts(error)
      })
  }, [])

  const addToCart = (product: ProductModel) => {
    setLoadingStates((prevLoadingStates) => ({
      ...prevLoadingStates,
      [product.id]: true
    }))

    setTimeout(() => {
      setCartItems([...cartItems, product])
      setLoadingStates((prevLoadingStates) => ({
        ...prevLoadingStates,
        [product.id]: false
      }))
    }, 1000)
  }

  return (
    <div>
      <Header setShowPage={setShowPage} cartItems={cartItems} />
      {!showPage ? (
        <S.Container>
          {products?.map((product) => (
            <S.StyledCard key={product.id}>
              <img src={product.foto} alt={product.nome} />
              <div>
                <div className="container-descriptions">
                  <div className="name-description">
                    <p>{product.nome}</p>
                    <span>{product.descricao}</span>
                  </div>
                  <div className="price">{formatPrice(product.preco)}</div>
                </div>
                <div>
                  <button
                    className="add-to-cart-button"
                    onClick={() => addToCart(product)}>
                    {loadingStates[product.id]
                      ? 'Adicionando...'
                      : 'Adicionar ao carrinho'}
                  </button>
                </div>
              </div>
            </S.StyledCard>
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
