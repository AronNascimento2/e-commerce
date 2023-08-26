import React, { useState, useEffect } from 'react'
import cartImage from '/src/assets/cart.svg'
import * as S from './styles'
import { ProductModel } from '../../../domain/models/productsModel'
import { formatPrice } from '../../utils/formatPrice'
import { CartItem } from '../CartItem'
import { handleAddFromCart } from '../../utils/handleAddFromCart'
import { Button } from '../Button'
import { ButtonGroup } from '../ButtonGroup'

interface HeaderProps {
  cartItems: ProductModel[]
  setShowPage: (show: boolean) => void
  setCartItems: (items: ProductModel[]) => void
}

export const Header: React.FC<HeaderProps> = ({
  cartItems,
  setShowPage,
  setCartItems
}) => {
  const [show, setShow] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)

  const handleModal = () => {
    setShow(!show)
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

  const handleRemoveFromCart = (item: ProductModel) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id)

    if (itemIndex !== -1) {
      const updatedCart = cartItems.slice()
      updatedCart.splice(itemIndex, 1)
      setCartItems(updatedCart)

      if (updatedCart.length === 0) {
        setShow(false)
      }
    }
  }

  const addToCart = (product: ProductModel) => {
    handleAddFromCart(cartItems, setCartItems, product)
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
          <img src={cartImage} alt="cart-image" />
        </div>
      </S.Container>
      {show && (
        <S.Dialog>
          <div onClick={handleModal} className="container-close-button">
            <span className="close-button">X</span>
          </div>
          {cartItems.length > 0 ? (
            <S.Wrapper>
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
            </S.Wrapper>
          ) : (
            <div className="empty-text">Carrinho vazio !</div>
          )}
          <div className="shop-items">
            <S.TotalPrice>Total: {formatPrice(totalPrice)}</S.TotalPrice>
            <ButtonGroup>
              <Button color="secondary" onClick={handleModal}>
                Continuar comprando
              </Button>
              <Button onClick={handlePage}>Ir para pagamento</Button>
            </ButtonGroup>
          </div>
        </S.Dialog>
      )}
    </>
  )
}
