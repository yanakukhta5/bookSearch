import styled from '@emotion/styled'

import { ButtonProps } from './types'

export const Button = styled.button<ButtonProps>`
  box-sizing: border-box;
  border-radius: 6px;
  border: 0px;
  min-width: 112px;
  width: ${(props) => (props.fullwidth ? '100%' : 'auto')};
  transition: all 0.1s ease-in-out;
  padding: 10px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ theme, background = 'third', disabled }) =>
    disabled ? theme.colors[background] + '99' : theme.colors[background]};
  color: ${({ theme, color = 'primary' }) => theme.colors[color]};

  &:hover {
    transform: ${({ disabled }) => (disabled ? 'initial' : 'scale(1.05)')};
  }

  &:focus-visible {
    transform: scale(1.05);
    outline: 3px solid
      ${({ theme, color = 'primary' }) => theme.colors[color]}70;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled,
  &:active {
    box-shadow: none;
    transform: initial;
  }
`
