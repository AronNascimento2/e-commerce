import React from 'react'
import { formatPrice } from '../../utils/formatPrice'
import { ProductModel } from '../../../domain/models/productsModel'
import * as S from './styles'

type ItemDetailsProps = {
  item: ProductModel
}

export const BoxItems: React.FC<ItemDetailsProps> = ({ item }) => {
  return (
    <S.BoxItems>
      <img src={item.foto} alt={item.nome} />
      <div className="container-descriptions">
        <div className="name-description">
          <p>{item.nome}</p>
          <span>{item.descricao}</span>
        </div>
        <div className="price">
          {formatPrice(item.preco)} x {item.count}
        </div>
      </div>
    </S.BoxItems>
  )
}
