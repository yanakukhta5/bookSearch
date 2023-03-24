import styled from '@emotion/styled'

export const Main = styled.main`
  min-height: calc(100vh - 70vh);
  background-color: ${({ theme }) => theme.colors.mainBg};
  display: flex;
  justify-content: center;
  @media ${({ theme }) => theme.dimensions.s} {
    min-height: calc(100vh - 390px - 10vh);
  }
`