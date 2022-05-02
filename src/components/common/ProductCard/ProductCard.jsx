import React from 'react'
import { 
  ProductCardStyle,
  BoxImg,
  BoxName,
  BoxPrice,
  BoxStatus,
  ButtonBuy,
  BoxStock
} from './StyleProductCard'

export const ProductCard = props => {
  const {
    coin,
    onSelectItem,
    item 
  } = props

  const {name, price, productImageUrl, stock} = item

  const isBuy = price && stock > 0 && coin >= price

  return (
    <ProductCardStyle>
      <BoxStock>จำนวน {stock}</BoxStock>
      <BoxImg src={productImageUrl} />
      <BoxName>{name || "ว่าง"}</BoxName>
      <BoxPrice>{price || ""}</BoxPrice>
      <BoxStatus
        isBuy={isBuy}
        onClick={() => {
          if (price > coin) return;
          onSelectItem(item)
        }}
      >
        <ButtonBuy >
          Buy
        </ButtonBuy>
      </BoxStatus>
    </ProductCardStyle>
  )
}