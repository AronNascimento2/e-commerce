import styled from 'styled-components'

export const Container = styled.div`
  height: 100px;
  background-color: #f5f5f5;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  .cart-icon {
    cursor: pointer;
    padding: 1rem;
    position: relative;
    top: 30px;
    right: 20px;
    img {
      color: white;
    }
  }
  .item-count {
    color: #ffffff;
  }
  .bubble {
    position: absolute;
    top: 8px;
    left: 4px;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background-color: #e35214;
    border-radius: 50%;
  }
`

export const Dialog = styled.div`
  width: 300px;
  max-height: 700px;
  border-radius: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 50px;
  right: 50px;
  color: black;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    .icon-close {
      cursor: pointer;
    }
  }
  background: #ffffff;
  p {
    font-weight: 600;
  }
  .shop-items {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    display: block;
    z-index: 999;
    top: 0px;
    bottom: 0;
    right: 0;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  .keepShopping {
    border: none;
    height: 40px;
    width: 140px;
    border-radius: 20px;
    cursor: pointer;
    background: grey;
    color: #ffffff;
    font-weight: bold;
  }
  .finishShop {
    border: none;
    height: 40px;
    width: 140px;
    border-radius: 20px;
    background-color: #ff9800;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    padding: 0;
    .keepShopping {
      border: none;
      height: 40px;
      width: 140px;
      border-radius: 20px;
      background: grey;
      color: #ffffff;
      font-weight: bold;
    }
    .finishShop {
      border: none;
      height: 40px;
      width: 140px;
      border-radius: 20px;
      background-color: #ff9800;
      color: #ffffff;
      font-weight: bold;
    }
  }
`
export const Wrapper = styled.div`
  max-height: 600px;
  overflow: auto;
  @media (max-width: 768px) {
    max-height: 590px;
    overflow: auto;
  }
`
export const TotalPrice = styled.div`
  padding-left: 1rem;
  color: #00a859;
  font-weight: bold;
`
