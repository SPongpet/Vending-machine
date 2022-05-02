import styled from 'styled-components'

export const BackNotesContainer = styled.div`
  border: 1px solid;
  width: 90px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({color}) => `${color}`};
`