import React, { useState, useEffect, useRef } from 'react'
import { PageContainer, LeftPage, RightPage } from './StyleIndexPage'
import { ProductCard, Coin, BackNotes } from '../../common'
import { isEmpty } from 'lodash'

export const IndexPage = props => {
  const {
    coin,
    totalBuy,
    products,
    listCoins,
    buyList,
    listBankNotes,
    onInputCoin,
    onSelectItem,
    onConfirm,
    onCancel,
    onDelete,
  } = props

  
  const isDisable = isEmpty(buyList)
  const prevCountRef = useRef()

  useEffect(() => {
    prevCountRef.current = buyList
  }, [buyList])

  return (
    <PageContainer>
      <LeftPage>
        {products.map((item) => {
          return (
            <ProductCard
              coin={coin}
              item={item}
              onSelectItem={onSelectItem}
            />
          )
        })}

      </LeftPage>
      <RightPage isDisable={isDisable}>
        <div className='box-right-header'>
          <h1>Input Coin</h1>
        </div>
        <div className='box-total-coin'>
          <h2>ยอดเงินที่ใช้ได้: {coin}</h2>
        </div>
        <div className='box-coin'>
          {listCoins.map(item => {
            return (
              <Coin coin={item} onInputCoin={onInputCoin}/>
            )
          })}
        </div>
        <div className='box-back-notes'>
          {listBankNotes.map((item) => {
            return (
              <BackNotes 
                backNote={item.backNote} 
                color={item.color}
                onInputCoin={onInputCoin}
              />
            )
          })}
        </div>
        {!isDisable && (
          <div className='box-list-item'>
            <div>
              <h3>รายการสินค้า:</h3>
            </div>
            {buyList.map((item, index) => {
              return (
                <div className='box-item'>
                  <div className='box-name'>สินค้า: {item.name}</div>
                  <div className='box-price'>ราคา: {item.price}</div>
                  <div className='box-delete' onClick={() => onDelete(item, index)}>ลบ</div>
                </div>
              )
            })}
            <div>
              <h3>ยอดรวม: {totalBuy}</h3>
            </div>
            <div className='box-button' >
              <div className='btn-confirm' onClick={isDisable ? () => {} : onConfirm}>
                <h2>ยืนยัน</h2>
              </div>
              <div className='btn-cancel' onClick={isDisable ? () => {} : onCancel}>
                <h2>ยกเลิก</h2>
              </div>
            </div>
          </div>
        )}
      </RightPage>
    </PageContainer>
  )
}