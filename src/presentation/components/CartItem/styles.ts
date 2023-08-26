import styled from 'styled-components'

export const Container = styled.div`
  border: none;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border-bottom: 1px solid lightgrey;
  justify-content: space-between;
  &:last-child {
    border: none;
  }
  .content {
    display: flex;
    align-items: center;
  }
  .container-descriptions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 1rem;
    font-size: 12px;
  }
  .quantity {
    button {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: none;
    }
    padding-top: 1rem;
    padding-left: 2rem;
    gap: 0.5rem;
    align-items: center;
    display: flex;
  }
  .name-description {
    display: flex;
    flex-direction: column;
  }

  .price {
    color: #00a859;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    .quantity {
      display: flex;
      button {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      display: flex;
    }
    img {
      width: 80px;
      height: 80px;
    }
  }
  img {
    width: 50px;
    height: 50px;
  }
`
