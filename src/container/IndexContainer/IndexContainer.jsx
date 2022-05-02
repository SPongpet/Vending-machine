import React, { useState, useEffect } from 'react'
import { IndexPage } from '../../components/Page'
import { products } from '../../data/product'
import { cloneDeep, remove, filter } from 'lodash'

export const IndexContainer = props => {
  const COIN_LIST = [1, 5, 10]
  const BANK_NOTES = [
    {backNote: 20, color: '#c1d5b6'},
    {backNote: 50, color: '#d1eaf3'},
    {backNote: 100, color: '#ddb3c1'},
    {backNote: 500, color: '#c2a2c2'},
    {backNote: 1000, color: '#d6cdc6'}
  ]

  const [totalCoin, setTotalCoin] = useState(0)
  const [totalBuy, setTotalBuy] = useState(0)
  const [buyList, setBuyList] = useState([])

  const onInputCoin = coin => {
    const newTotal = totalCoin + coin
    setTotalCoin(newTotal)
  }

  const onSelectItem = (item) => {
    item.stock -= 1
    const newList = cloneDeep(buyList)
    newList.push(item)
    setBuyList(newList)

    const newTotalBuy = totalBuy + item.price
    setTotalBuy(newTotalBuy)
  }

  const onConfirm = () => {
    if (totalCoin < totalBuy) {
      alert('ยอดเงินของคุณไม่เพียงพอ')
    } else {
      const newTotal = totalCoin - totalBuy
      setTotalCoin(newTotal)
      setTotalBuy(0)
      setBuyList([])
    }
  }

  const onCancel = () => {
    setTotalCoin(0)
    setBuyList([])
  }

  const onDelete = item => {
    const filterItem = filter(products, product => product.id === item.id)
    filterItem[0].stock += 1
    
    const newList = cloneDeep(buyList)
    remove(newList, product => product.id === item.id)
    setBuyList(newList)

    const newTotalBuy = totalBuy - item.price
    setTotalBuy(newTotalBuy)
  }

  return (
    <IndexPage
      coin={totalCoin}
      totalBuy={totalBuy}
      products={products}
      buyList={buyList}
      listCoins={COIN_LIST}
      listBankNotes={BANK_NOTES}
      onInputCoin={onInputCoin}
      onSelectItem={onSelectItem}
      onConfirm={onConfirm}
      onCancel={onCancel}
      onDelete={onDelete}
    />
  )
}