import styled from '@emotion/styled'

export const Wrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.headerBg};
  background-image: url('/img/header/background-min.jpg');
  background-size: cover;
  height: 50vh;
  position: relative;
  z-index: 1;
  display: grid;
  &::before {
    z-index: 2;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    background-color: ${({ theme }) => theme.colors.overlay};
  }
  @media ${({theme}) => theme.dimensions.s} {
    height: 35vh;
  }
`

export const Content = styled.div`
  text-align: center;

`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 46px;
  text-align: center;
  margin-bottom: 10px;
  @media ${({theme}) => theme.dimensions.s} {
    font-size: 36px;
  }
`

export const Dropdowns = styled.div`
  display: flex;
`
