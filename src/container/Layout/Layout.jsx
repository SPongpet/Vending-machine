import React from 'react'
import { Style } from './LayoutStyle'

export const Layout = props => {
  const { page: Display } = props

  return (
    <Style>
      <div className='layout-top-bar'>
        <div>
          <h1>Vending Machine</h1>
        </div>
      </div>
      <div className='display-page'>
        <Display
          {...props}
        />
      </div>
    </Style>
  )
}