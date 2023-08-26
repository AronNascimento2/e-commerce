import styled from 'styled-components'

export const BoxItems = styled.div`
  border: none;
  display: flex;
  flex-direction: row;
  padding: 1rem 0.8rem 1rem 2.4rem;
  position: relative;
  border-bottom: 1px solid lightgrey;
  .container-descriptions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 1rem;
    font-size: 12px;
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
