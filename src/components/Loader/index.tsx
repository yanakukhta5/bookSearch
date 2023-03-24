import styled from '@emotion/styled'

export const Loader = styled.span`
  --loader-size: 50px;
  --loader-border-size: 4px;
  --loader-border-color: ${({theme}) => theme.colors.third};
  width: var(--loader-size);
  height: var(--loader-size);
  border: var(--loader-border-size) solid var(--loader-border-color);
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  background-color: transparent;
  border-radius: 50%;
  position: relative;
  animation: rotateX 0.7s infinite linear;

  &::before {
    content: '';
    border: var(--loader-border-size) solid var(--loader-border-color);
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: transparent;
    background-color: transparent;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    animation: rotateX 0.35s infinite linear reverse;
  }

  @keyframes rotateX {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
`
