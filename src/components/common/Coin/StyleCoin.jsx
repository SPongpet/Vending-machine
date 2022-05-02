import styled from 'styled-components'

export const CoinContainer = styled.div`
  border-radius: 50%;
  width: ${({coin}) => `${50 + parseInt(coin)}`}px;
  height: ${({coin}) => `${50 + parseInt(coin)}`}px;
  background-color: gold;
  display: flex;
  align-items: center;
  justify-content: center;
`