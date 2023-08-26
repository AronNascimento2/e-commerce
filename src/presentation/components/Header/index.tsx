import React, { useState, useEffect } from 'react'
import cartImage from '/cart.svg'
import * as S from './styles'
import { ProductModel } from '../../../domain/models/productsModel'
import { formatPrice } from '../../utils/formatPrice'
import { BoxItems } from '../BoxItems'

interface HeaderProps {
  cartItems: ProductModel[]
  setShowPage: (show: boolean) => void
}

export const Header: React.FC<HeaderProps> = ({ cartItems, setShowPage }) => {
  const [show, setShow] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const handleModal = () => {
    setShow(!show)
  }

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        event.target instanceof Node &&
        !isDescendant(event.target, 'dialog') &&
        !isDescendant(event.target, 'cart-icon')
      ) {
        setShow(false)
      }
    }
    if (show) {
      window.addEventListener('click', handleDocumentClick)
    }
    return () => {
      window.removeEventListener('click', handleDocumentClick)
    }
  }, [show])

  const isDescendant = (element: Node, className: string) => {
    let currentNode: Node | null = element
    while (currentNode !== null) {
      if (
        currentNode instanceof HTMLElement &&
        currentNode.classList.contains(className)
      ) {
        return true
      }
      currentNode = currentNode.parentNode
    }
    return false
  }

  useEffect(() => {
    const calculatedTotalPrice = cartItems.reduce(
      (total, item) => total + item.preco * (item.count ?? 1),
      0
    )
    setTotalPrice(calculatedTotalPrice)
  }, [cartItems])
  const handlePage = () => {
    setShowPage(false)
    setShow(false)
  }
  return (
    <>
      <S.Container>
        <div className="cart-icon" onClick={handleModal}>
          {cartItems.length > 0 && (
            <div className="bubble">
              <span className="item-count">{cartItems.length}</span>
            </div>
          )}
          <img src={cartImage} className="logo" alt="Vite logo" />
        </div>
      </S.Container>
      {show && (
        <S.Dialog>
          <S.Wrapper>
            {cartItems.map((item) => (
              <BoxItems key={item.id} item={item} />
            ))}
          </S.Wrapper>
          <div className="shop-items">
            <S.TotalPrice>Total: {formatPrice(totalPrice)}</S.TotalPrice>
            <S.ButtonGroup>
              <button className="keepShopping" onClick={handleModal}>
                Continuar comprando
              </button>
              <button onClick={handlePage} className="finishShop">
                Ir para pagamento
              </button>
            </S.ButtonGroup>
          </div>
        </S.Dialog>
      )}
    </>
  )
}
