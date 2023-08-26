import React, { useState } from 'react'
import { formatPrice } from '../../utils/formatPrice'
import { ProductModel } from '../../../domain/models/productsModel'
import * as S from './styles'
import { TotalPrice } from '../../components/Header/styles'
import { CartItem } from '../../components/CartItem'
import { handleAddFromCart } from '../../utils/handleAddFromCart'
import { Button } from '../../components/Button'
import { ButtonGroup } from '../../components/ButtonGroup'

type CheckoutPageProps = {
  cartItems: ProductModel[]
  setShowPage: (show: boolean) => void
  setCartItems: (cartItems: ProductModel[]) => void
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  cartItems,
  setShowPage,
  setCartItems
}) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [isCartEmpty, setIsCartEmpty] = useState(cartItems.length === 0)
  const [isLoading, setIsLoading] = useState(false)

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.preco * (item.count ?? 1),
    0
  )

  const handlePayment = () => {
    // Verifica se há itens no carrinho antes de permitir o pagamento
    if (cartItems.length === 0) {
      return
    }
    // Inicia o estado de carregamento
    setIsLoading(true)
    // Simula um processo de pagamento e exibe a mensagem de sucesso após 2 segundos
    setTimeout(() => {
      setPaymentSuccess(true)
      // Após 2 segundos, esconde a mensagem de sucesso e faz outras atualizações
      setTimeout(() => {
        setPaymentSuccess(false)
        setCartItems([]) // Atualiza o carrinho para ficar vazio
        setShowPage(true) // Volta para HomePage
        setIsCartEmpty(true) // Atualiza o estado do carrinho vazio
        setIsLoading(false) // Finaliza o estado de carregamento
      }, 2000)
    }, 2000)
  }

  const handleRemoveFromCart = (item: ProductModel) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id)

    if (itemIndex !== -1) {
      const updatedCart = cartItems.slice()
      updatedCart.splice(itemIndex, 1)
      setCartItems(updatedCart)
    }
  }

  const addToCart = (product: ProductModel) => {
    handleAddFromCart(cartItems, setCartItems, product)
  }

  return (
    <S.Container className="checkout-page">
      {!paymentSuccess && (
        <>
          <div>
            <div className="title">
              <h1>Carrinho de Compras</h1>
            </div>
            {cartItems
              .reduce(
                (uniqueItems: ProductModel[], currentItem: ProductModel) => {
                  const existingItem = uniqueItems.find(
                    (item) => item.id === currentItem.id
                  )
                  if (existingItem) {
                    existingItem.count = (existingItem.count ?? 0) + 1
                  } else {
                    uniqueItems.push({ ...currentItem, count: 1 })
                  }
                  return uniqueItems
                },
                []
              )
              .map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={handleRemoveFromCart}
                  onAdd={() => addToCart(item)}
                />
              ))}
          </div>
          <div className="shop-items">
            <TotalPrice>Total: {formatPrice(totalAmount)}</TotalPrice>
            <ButtonGroup>
              <Button color="secondary" onClick={() => setShowPage(true)}>
                Continuar comprando
              </Button>
              <Button
                onClick={handlePayment}
                disabled={isCartEmpty || isLoading}>
                {isLoading ? 'Carregando...' : 'Pagar via Boleto'}
              </Button>
            </ButtonGroup>
          </div>
        </>
      )}
      {paymentSuccess && (
        <div className="success-message">Compra finalizada com sucesso!!!</div>
      )}
    </S.Container>
  )
}
