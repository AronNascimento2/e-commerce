import styled from 'styled-components'
import { Card } from '../../components/Card'

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: flex;
  }
`
export const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #f5f5f5;
  }

  .container-descriptions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 1rem;
  }

  .name-description {
    display: flex;
    flex-direction: column;
  }

  .name-description p {
    margin: 0;
    font-weight: bold;
  }

  .name-description span {
    font-size: 14px;
    color: #666;
  }

  .price {
    color: #00a859;
    font-size: 16px;
  }
  .add-to-cart-button {
    width: 200px;
    height: 40px;
    border-radius: 12px;
    color: #ffffff;
    border: none;
    background-color: #ff9800;
    &:hover {
      cursor: pointer;
    }
  }
  img {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    height: 100px;
    .add-to-cart-button {
      width: 150px;
      height: 30px;
    }
    .container {
      display: flex;
    }
  }
`
