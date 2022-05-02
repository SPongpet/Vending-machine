import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const LeftPage = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
`

export const RightPage = styled.div`
  width: 30%;
  border: 2px solid;
  .box-right-header {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box-coin {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100px;
  }

  .box-back-notes {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 130px;
    flex-wrap: wrap;
  }

  .box-total-coin {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box-button {
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .btn-confirm {
    width: 100px;
    border: 1px solid;
    height: 50px;
    justify-content: center;
    align-items: center;
    display: flex;
    opacity: ${({isDisable}) => isDisable ? 0.5 : 1};
  }

  .btn-cancel {
    width: 100px;
    border: 1px solid;
    height: 50px;
    justify-content: center;
    align-items: center;
    display: flex;
    opacity: ${({isDisable}) => isDisable ? 0.5 : 1};
  }

  .box-list-item {
    padding: 20px;
  }

  .box-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2px 10px;
  }

  .box-name {
    width: 45%;
  }

  .box-price {
    width: 45%;
  }

  .box-delete {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
  }
`