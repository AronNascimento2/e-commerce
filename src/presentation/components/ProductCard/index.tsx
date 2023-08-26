import React from 'react'
import { formatPrice } from '../../utils/formatPrice'
import { StyledCard } from './styles'
import { ProductModel } from '../../../domain/models/productsModel'
import { Button } from '../Button'

type LoadingStates = {
  [productId: number]: boolean
}

type ProductCardProps = {
  product: ProductModel
  addToCart: (product: ProductModel) => void
  loadingStates: LoadingStates
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  addToCart,
  loadingStates
}) => {
  return (
    <StyledCard key={product.id}>
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
          <Button
            disabled={loadingStates[product.id]}
            onClick={() => addToCart(product)}>
            {loadingStates[product.id]
              ? 'Adicionando...'
              : 'Adicionar ao carrinho'}
          </Button>
        </div>
      </div>
    </StyledCard>
  )
}
