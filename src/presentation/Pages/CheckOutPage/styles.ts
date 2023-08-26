import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
    color: #00a859;
  }
  img {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 768px) {
    height: 60%;
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
