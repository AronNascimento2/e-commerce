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
  width: 400px;
  max-height: 700px;
  border-radius: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 50px;
  right: 50px;
  color: black;
  min-height: 100px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  overflow: auto;
  z-index: 999;
  background: #ffffff;
  .empty-text {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0 1rem 1.5rem;

    font-weight: 600;
    color: grey;
  }
  .container-close-button {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-shadow: 0 5px 3px -3px rgba(0, 0, 0, 0.3);

    padding: 1rem;
    width: 90%;
    cursor: pointer;
    .close-button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      font-weight: 600;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
      &:hover {
      }
    }
  }
  p {
    font-weight: 600;
  }
  .shop-items {
    box-shadow: 0 -5px 3px -3px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    margin: 0.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    overflow: auto;
    border-radius: 0;
    z-index: 999;
    top: 0;
    bottom: 0;
    right: 0;

    .shop-items {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      z-index: 9999;
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
