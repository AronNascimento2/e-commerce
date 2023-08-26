import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 100%;
  .box {
    max-width: 768px;
  }
  .shop-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 77px;
  }
  .success-message {
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    height: 50vh;
    top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 50px;
    height: 50px;
  }
  .keepShopping {
    border: none;
    height: 40px;
    width: 140px;
    border-radius: 12px;
    cursor: pointer;
    background: grey;
    color: #ffffff;
    font-weight: bold;
  }
  .finishShop {
    border: none;
    height: 40px;
    width: 140px;
    border-radius: 12px;
    background-color: #ff9800;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    padding: 0;
    .box {
      border: none;
      display: flex;
      flex-direction: row;
      padding: 1rem 0.8rem 1rem 2.4rem;
      position: relative;
      border-bottom: 1px solid lightgrey;
    }
  }
`
