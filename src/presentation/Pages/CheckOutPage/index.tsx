import React, { useState } from 'react'
import { formatPrice } from '../../utils/formatPrice'
import { ProductModel } from '../../../domain/models/productsModel'
import * as S from './styles'
import {
  ButtonGroup,
  TotalPrice,
  Wrapper
} from '../../components/Header/styles'
import { BoxItems } from '../../components/BoxItems/styles'

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
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.preco * (item.count ?? 1),
    0
  )

  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [isCartEmpty, setIsCartEmpty] = useState(cartItems.length === 0)

  const handlePayment = () => {
    // Verifica se há itens no carrinho antes de permitir o pagamento
    if (cartItems.length === 0) {
      return
    }

    // Simula um processo de pagamento e exibe a mensagem de sucesso após 2 segundos
    setTimeout(() => {
      setPaymentSuccess(true)

      // Após 2 segundos, esconde a página
      setTimeout(() => {
        setPaymentSuccess(false)
        setCartItems([]) // Atualiza o carrinho para ficar vazio
        setShowPage(false)
        setIsCartEmpty(true) // Atualiza o estado do carrinho vazio
      }, 2000)
    }, 2000)
  }

  return (
    <S.Container className="checkout-page">
      {!paymentSuccess && (
        <>
          <Wrapper>
            <h1>Carrinho de Compras</h1>
            {cartItems.map((item) => (
              <BoxItems key={item.id} className="box">
                <img src={item.foto} alt={item.nome} />

                <div className="container-descriptions">
                  <div className="name-description">
                    <p>{item.nome}</p>
                    <span>{item.descricao}</span>
                  </div>
                  <div className="price">{formatPrice(item.preco)}</div>
                </div>
              </BoxItems>
            ))}
          </Wrapper>
          <div>
            <TotalPrice>Total: {formatPrice(totalAmount)}</TotalPrice>
            <ButtonGroup>
              <button
                className="finishShop"
                onClick={handlePayment}
                disabled={isCartEmpty}>
                Pagar via Boleto
              </button>

              <button
                className="keepShopping"
                onClick={() => setShowPage(false)}>
                Continuar comprando
              </button>
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
