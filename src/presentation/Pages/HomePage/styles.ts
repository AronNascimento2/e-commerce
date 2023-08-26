import styled from 'styled-components'

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
