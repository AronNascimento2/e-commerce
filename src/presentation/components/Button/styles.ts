import styled, { css } from 'styled-components'

type ContainerProps = {
  color?: string
}

export const Container = styled.button<ContainerProps>`
  ${({ color }) => css`
    width: 200px;
    height: 40px;
    border-radius: 12px;
    color: #ffffff;
    border: none;
    background-color: ${color === 'secondary' ? 'grey' : '#ff9800'};
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      cursor: pointer;
      background-color: #ff9800;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
    @media (max-width: 768px) {
      width: 180px;
      height: 30px;
      font-weight: 400;
    }
  `}
`
