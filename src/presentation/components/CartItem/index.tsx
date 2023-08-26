import React from 'react'
import { formatPrice } from '../../utils/formatPrice'
import { ProductModel } from '../../../domain/models/productsModel'
import * as S from './styles'

type CartItemProps = {
  item: ProductModel
  onAdd: (item: ProductModel) => void
  onRemove: (item: ProductModel) => void
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onAdd,
  onRemove
}) => {
  return (
    <S.Container>
      <div className="content">
        <img src={item.foto} alt={item.nome} />
        <div className="container-descriptions">
          <div className="name-description">
            <p>{item.nome}</p>
            <span>{item.descricao}</span>
          </div>
          <div className="price">{formatPrice(item.preco)}</div>
        </div>
      </div>
      <div className="quantity">
        <button onClick={() => onRemove(item)}>-</button>{' '}
        <span>{item.count ?? 1}</span>
        <button onClick={() => onAdd(item)}>+</button>
      </div>
    </S.Container>
  )
}
