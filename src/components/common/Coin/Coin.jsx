import React from 'react'
import { CoinContainer } from './StyleCoin'

export const Coin = props => {
  const { coin, onInputCoin } = props

  return (
    <CoinContainer onClick={() => onInputCoin(coin)} coin={coin}>
      <div>{coin}</div>
    </CoinContainer>
  )
}