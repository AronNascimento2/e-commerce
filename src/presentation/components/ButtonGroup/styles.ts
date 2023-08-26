import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 0.5rem 0;

  //Aplica estilo ao children
  & > * {
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`
