import { ProductModel } from '../../domain/models/productsModel'

export const handleAddFromCart = (
  cartItems: ProductModel[],
  setCartItems: (items: ProductModel[]) => void,
  product: ProductModel
) => {
  setCartItems([...cartItems, product])
}
