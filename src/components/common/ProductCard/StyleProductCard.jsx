import styled from 'styled-components'

export const ProductCardStyle = styled.div`
  border: 1px solid LIGHTSEAGREEN;
  width: 190px;
  height: 230px;
  display: flex;
  flex-direction: column;
  margin-left: 2px;
  margin-top: 2px;
`

export const BoxImg = styled.img`
  height: 60px;
  flex-grow: 1;
`

export const BoxName = styled.div`
  font-size: 0.8em;
  text-align: center;
`

export const BoxPrice = styled.div`
  text-align: center;
`

export const BoxStatus = styled.div`
  color: white;
  background-color: ${({isBuy}) => isBuy ? "green" : "red"};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 80%;
  margin: auto;
  border: 1px solid;
  /* &:hover {
    cursor: ${props => (props.available ? "pointer" : "arrow")};
  } */
`

export const ButtonBuy = styled.div`
  
`

export const BoxStock = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 10px;
  padding: 2px;
`